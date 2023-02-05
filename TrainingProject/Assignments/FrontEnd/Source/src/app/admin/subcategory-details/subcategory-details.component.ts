import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { ProtectedAPIsService } from 'src/app/Services/protected-apis.service';

@Component({
  selector: 'app-subcategory-details',
  templateUrl: './subcategory-details.component.html',
  styleUrls: ['./subcategory-details.component.css']
})
export class SubcategoryDetailsComponent implements OnInit {

  subCategories: Array<any> = [];

  p: number = 1;
  total: number = 0;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getSubCategory();
  }

  private getSubCategory() {
    this.categoryService.getSubCategories().subscribe((i: any[]) => {
      this.subCategories = i;
      this.total = i.length;
    });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getSubCategory();
  }

}
