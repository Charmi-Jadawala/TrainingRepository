import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-layout',
  templateUrl: './course-layout.component.html',
  styleUrls: ['./course-layout.component.css']
})
export class CourseLayoutComponent implements OnInit {

  courseId!: number;
  noOfWeeks!: number;
  weeks: Array<number> = [];
  modules: Array<any> = [];

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseId = Number(this.route.snapshot.params['id']);
    this.getNoOfWeeks();
    this.getCourseModules(1, this.courseId);
  }


  private getNoOfWeeks() {
    this.courseService.getWeeks(this.courseId).subscribe((i: any) => {
      this.noOfWeeks = i;
      this.weeks = Array(this.noOfWeeks).fill(0).map((x, i) => i);
    });
  }

  getCourseModules(week: number, course: number) {
    this.courseService.getModules(week, course).subscribe((i: any[]) => {
      this.modules = i;
    });
  }
}
