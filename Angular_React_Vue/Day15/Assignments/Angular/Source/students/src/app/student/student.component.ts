import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  StudentForm: FormGroup;
  localList: Array<any> = [];

  constructor(private fb: FormBuilder, private studentService: StudentService) { 
    this.StudentForm = this.fb.group({
      Id: [''],
      Name: this.fb.group({
        FirstName: [''],
        LastName: [''],
      }),
      Age: [''],
      Address: ['']
  })
}

  ngOnInit(): void {
    this.localList = this.studentService.getData();
  }

  onSubmit() {
    var studentObj = this.StudentForm.value;
    var studentId = this.StudentForm.get('Id')?.value;
    this.studentService.createStudent(studentObj, studentId);
  }

  update() {
    var studentObj = this.StudentForm.value;
    var studentId = this.StudentForm.get('Id')?.value;
    this.studentService.updateStudent(studentObj, studentId);
  }

  delete() {
    var studentId = this.StudentForm.get('Id')?.value;
    this.studentService.deleteStudent(studentId);
  }

}
