import { Component, OnInit } from '@angular/core';
import { ProtectedAPIsService } from 'src/app/Services/protected-apis.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  currentId!: number;
  currentRecord!: any;

  updatedCategory!: any;
  toggledCategory: any;

  categoryForm!: FormGroup;

  constructor(private categoryService: CategoryService, private protectedAPIsService: ProtectedAPIsService,
    private route: ActivatedRoute, private fb: FormBuilder) {
    this.categoryForm = fb.group({
      categoryId: ['', Validators.required],
      categoryName: ['', Validators.compose([Validators.required, Validators.maxLength(110)])],
      courseCount: ['', Validators.compose([Validators.required, Validators.min(0)])]
    });
  }

  ngOnInit(): void {
    this.currentId = Number(this.route.snapshot.params["id"]);

    this.getDetails(this.currentId);
  }

  getDetails(id: number) {
    this.categoryService.getCategoryById(id).subscribe((i: any) => {
      this.currentRecord = i;
      this.categoryForm.setValue(this.currentRecord);
    });
  }

  toggleStatus() {
    const id: number = this.currentId;
    this.protectedAPIsService.alterStatusCategories(id).subscribe((i: any) => {
      this.toggledCategory = i;
    });
    alert("Category status altered successfully...");
  }

  onCategorySubmit(){
    this.updatedCategory = this.categoryForm.value;
    this.protectedAPIsService.putCategories(this.updatedCategory).subscribe((i: any) => {
      this.updatedCategory = i;
    });
    alert("Category updated successfully...");
  }

}
