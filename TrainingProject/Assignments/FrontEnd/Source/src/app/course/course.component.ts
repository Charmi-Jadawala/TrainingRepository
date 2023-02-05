import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../Services/course.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  id: number = Number(sessionStorage.getItem('Id'));
  userCourses: Array<any> = [];

  isLoggedIn!: boolean;
  hasPurshased: any;
  condition!: boolean;

  currentId!: number;
  courseDetails: any;
  instructors: Array<any> = [];
  skills: Array<any> = [];

  newCourse: { userId: number, courseId: number } = { userId: this.id, courseId: 0 };

  constructor(private route: ActivatedRoute, private router: Router,
    private authService: AuthService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.currentId = Number(this.route.snapshot.params["id"]);
    this.isLoggedIn = this.authService.isLoggedIn();

    this.getCourseById(this.currentId);
    this.getCourseInstructors(this.currentId);
    this.getCourseSkills(this.currentId);
    this.getUserCourse();
  }

  getCourseById(id: number) {
    this.courseService.getCourseDetails(id).subscribe((i: any) => {
      this.courseDetails = i;
    });
  }

  getCourseInstructors(id: number) {
    this.courseService.getCourseInstructors(id).subscribe((i: any) => {
      this.instructors = i;
    });
  }

  getCourseSkills(id: number) {
    this.courseService.getCourseSkills(id).subscribe((i: any) => {
      this.skills = i;
    });
  }

  getUserCourse() {
    this.courseService.getUserCourses(this.id).subscribe((i: any[]) => {
      this.userCourses = i;
      this.hasPurshased = this.userCourses.find(x => { return x.CourseId == this.currentId });

      if (this.hasPurshased == undefined) {
        this.condition = false;
      }
      else {
        this.condition = true;
      }
    });
  }

  addCourse() {
    this.newCourse.courseId = this.currentId;
    this.courseService.postUserCourse(this.newCourse).subscribe((i: any) => {
      this.newCourse = i;

      alert('Course purchased successfully...')
      this.router.navigate(['/welcomeUser']);
    });
  }
}
