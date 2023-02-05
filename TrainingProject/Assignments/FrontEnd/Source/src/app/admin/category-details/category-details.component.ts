import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { ProtectedAPIsService } from 'src/app/Services/protected-apis.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit, OnDestroy {

  categories: Array<any> = [];
  categorySubscription: any;
  subscription: any;

  p: number = 1;
  total: number = 0;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  private getCategory() {
    this.categorySubscription = this.categoryService.getCategories().subscribe((i: any[]) => {
      this.categories = i;
      this.total = i.length;
    });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getCategory();
  }

  ngOnDestroy(): void {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
