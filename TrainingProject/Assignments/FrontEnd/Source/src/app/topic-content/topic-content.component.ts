import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-topic-content',
  templateUrl: './topic-content.component.html',
  styleUrls: ['./topic-content.component.css']
})
export class TopicContentComponent implements OnInit {

  topicId!: number;
  content!: any;
  isReading: boolean = false;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.topicId = Number(this.route.snapshot.params['id']);

    this.getTopicContents(this.topicId);
  }

  getTopicContents(id: number) {
    this.courseService.getContent(id).subscribe((i: any) => {
      this.content = i;
      if(this.content.type == 'Reading'){
        this.isReading = true;
      }
      else{
        this.isReading = false;
      }

    });
  }

}
