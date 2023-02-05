import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courses: Array<any> = [];

  p: number = 1;
  total: number = 0;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourse();
  }

  private getCourse() {
    this.courseService.getCourses().subscribe((i: any[]) => {
      this.courses = i;
    });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getCourse();
  }
}
