import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-free-courses',
  templateUrl: './free-courses.component.html',
  styleUrls: ['./free-courses.component.css']
})
export class FreeCoursesComponent implements OnInit {

  courses: Array<any> = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCoursesActive().subscribe((i: any[]) => {
      this.courses = i;     
    });
  }

}
