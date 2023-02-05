import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: Array<any> = [];
  showData: boolean = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  getList() {
    this.showData = true;
    this.studentList = this.studentService.getData();
  }
}
