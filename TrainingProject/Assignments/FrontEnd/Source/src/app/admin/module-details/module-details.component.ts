import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.css']
})
export class ModuleDetailsComponent implements OnInit {
  modules: Array<any> = [];
  courseId!: number;
  condition!: boolean;

  p: number = 1;
  total: number = 0;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
    this.getModules(this.courseId);
  }

  private getModules(id: number) {
    this.courseService.getModulesByCourse(id).subscribe((i: any[]) => {
      this.modules = i;
      if(this.modules.length == 0){
        this.condition = true;
      }
      else{
        this.condition = false;
      }
    });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getModules(this.courseId);
  }
}
