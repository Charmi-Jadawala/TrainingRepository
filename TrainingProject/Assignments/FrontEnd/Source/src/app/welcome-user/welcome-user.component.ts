import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {

  id: number = Number(sessionStorage.getItem('Id'));
  userName = sessionStorage.getItem('FullName');

  userCourses: Array<string> = [];
  condition!: boolean;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getUserCourse(this.id);
  }

  getUserCourse(id: number){
    this.courseService.getUserCourses(id).subscribe((i: any[]) => {
      this.userCourses = i;
      if (this.userCourses.length > 0) {
        this.condition = true;
      }
      else {
        this.condition = false;
      }      
    });
  }
}
