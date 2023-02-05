import { CategoryService } from './../Services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.css']
})
export class ExploreCoursesComponent implements OnInit {

  categories: Array<any> = [];
  
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategoriesActive().subscribe((i: any[]) => {
      this.categories = i;
    });
  }

}
