import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {

  topics: Array<any> = [];
  moduleId!: number;
  condition!: boolean;

  p: number = 1;
  total: number = 0;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.moduleId = this.route.snapshot.params['id'];
    this.getTopics(this.moduleId);
  }

  private getTopics(id: number) {
    this.courseService.getTopicsByModuleId(id).subscribe((i: any[]) => {
      this.topics = i;
      if(this.topics.length == 0){
        this.condition = true;
      }
      else{
        this.condition = false;
      }
    });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getTopics(this.moduleId);
  }

}
