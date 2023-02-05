import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {

  allCourses: Array<any> = [];

  courses: Array<any> = [];
  categories: Array<any> = [];
  subCategories: Array<any> = [];

  searchCourseValue!: string;

  condition!: boolean;
  showAll: boolean = true;

  prevText: string = '';
  resultCount: number = 0;
  resultArray: Array<any> = [];

  constructor(private courseService: CourseService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
    this.getSubCategory();
    this.getCourse();
  }

  private getCourse() {
    this.courseService.getCoursesActive().subscribe((i: any[]) => {
      this.allCourses = i;
    });
  }

  private getCategory() {
    this.categoryService.getCategoriesActive().subscribe((i: any[]) => {
      this.categories = i;
    });
  }

  private getSubCategory() {
    this.categoryService.getSubCategoriesActive().subscribe((i: any[]) => {
      this.subCategories = i;
    });
  }

  onSubmitCategory(id: number) {
    this.showAll = false;

    this.courseService.getCoursesActive().subscribe((i: any[]) => {
      this.resultArray = i;

      this.courses = this.resultArray.filter(course => {
        return course.categoryId == id;
      });

      this.resultCount = this.courses.length;
      if (this.resultCount > 0) {
        this.condition = true;
      }
      else {
        this.condition = false;
      }
    });
  }

  onSubmitSubCategory(id: number) {
    this.showAll = false;

    this.courseService.getCoursesActive().subscribe((i: any[]) => {
      this.resultArray = i;

      this.courses = this.resultArray.filter(course => {
        return course.subCategoryId == id;
      });

      this.resultCount = this.courses.length;
      if (this.resultCount > 0) {
        this.condition = true;
      }
      else {
        this.condition = false;
      }
    });
  }

  onSubmitCourse(keyEvent: any) {
    this.showAll = false;

    if (keyEvent.keyCode === 13) {
      this.courseService.getCoursesActive().subscribe((i: any[]) => {
        this.resultArray = i;

        this.courses = this.resultArray.filter(course => {
          return course.courseName.toLowerCase().includes(this.searchCourseValue.trim().toLowerCase());
        });

        this.resultCount = this.courses.length;
        if (this.resultCount > 0) {
          this.condition = true;
        }
        else {
          this.condition = false;
        }      
      });
    }    
  }
}

