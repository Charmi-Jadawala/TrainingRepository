import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { ProtectedAPIsService } from 'src/app/Services/protected-apis.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.css']
})
export class EditSubcategoryComponent implements OnInit {

  currentId!: number;
  currentRecord!: any;

  categories: Array<any> = [];
  updatedSubcategory!: any;
  toggledSubcategory: any;

  subCategoryForm!: FormGroup;

  constructor(private categoryService: CategoryService, private protectedAPIsService: ProtectedAPIsService,
    private route: ActivatedRoute, private fb: FormBuilder) {
    this.subCategoryForm =  fb.group({
      subCategoryId: ['', Validators.required],
      categoryId: ['', Validators.compose([Validators.required])],
      subCategoryName: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(150)])],
    });
  }

  ngOnInit(): void {
    this.currentId = Number(this.route.snapshot.params["id"]);

    this.getDetails(this.currentId);
    this.getCategory();
  }

  getDetails(id: number) {
    this.categoryService.getSubCategoryById(id).subscribe((i: any) => {
      this.currentRecord = i;
      this.subCategoryForm.setValue(this.currentRecord);
    });
  }

  private getCategory() {
    this.categoryService.getCategories().subscribe((i: any[]) => {
      this.categories = i;
    });
  }

  toggleStatus() {
    const id: number = this.currentId;
    this.protectedAPIsService.alterStatusSubCategories(id).subscribe((i: any) => {
      this.toggledSubcategory = i;
    });
    alert("Subcategory status altered successfully...");
  }

  onSubCategorySubmit(){    
    this.updatedSubcategory = this.subCategoryForm.value;
    this.protectedAPIsService.putSubCategories(this.updatedSubcategory).subscribe((i: any) => {
      this.updatedSubcategory = i;
    });
    alert("Subcategory updated successfully...");
  }
}
