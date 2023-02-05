import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProtectedAPIsService } from '../../Services/protected-apis.service';
import { CourseService } from '../../Services/course.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  categoryForm: FormGroup;
  newCategory: any;

  subCategoryForm: FormGroup;
  newSubCategory: any;

  categories: Array<any> = [];
  subCategories: Array<any> = [];
  courses: Array<any> = [];

  p: number = 1;
  total: number = 0;

  modifieddate = new Date();

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private courseService: CourseService, private protectedAPIsService: ProtectedAPIsService) {
    this.categoryForm = fb.group({
      categoryName: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(110)])],
      courseCount: [''],
    });

    this.subCategoryForm = fb.group({
      categoryId: ['', Validators.required],
      subCategoryName: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(150)])],
    });
  }

  ngOnInit(): void {
    this.getCategory();
    this.getSubCategory();
    this.getCourse();
  }

  private getCourse() {
    this.courseService.getCourses().subscribe((i: any[]) => {
      this.courses = i;
    });
  }

  private getSubCategory() {
    this.categoryService.getSubCategories().subscribe((i: any[]) => {
      this.subCategories = i;
    });
  }

  private getCategory() {
    this.categoryService.getCategoriesActive().subscribe((i: any[]) => {
      this.categories = i;
    });
  }

  onCategorySubmit() {
    this.categoryForm.controls['courseCount'].setValue(0);
    this.newCategory = this.categoryForm.value;
    this.protectedAPIsService.postCategories(this.newCategory).subscribe((i: any) => {
      this.newCategory = i;
    });
  }

  onSubCategorySubmit() {
    this.newSubCategory = this.subCategoryForm.value;
    this.protectedAPIsService.postSubCategories(this.newSubCategory).subscribe((i: any) => {
      this.newSubCategory = i;
    });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getCourse();
  }

}
