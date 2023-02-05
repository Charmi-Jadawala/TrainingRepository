import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList: Array<any> = [];

  constructor(private logService: LogService) { }

  getData() {
    this.logService.log("Fetching Student Data...");
    return this.studentList;
  }

  createStudent(obj: any, id: any) {
    var isUnique = this.studentList.find((student) => {
      return student.Id == id;
    });
    if(isUnique == undefined) {
      this.logService.log("Creating a new Student...");
      this.studentList.push(obj);
    }
    else{
      this.logService.log(`Student Id: ${id} already exists...`);
    }
  }

  updateStudent(obj: any, id: any) {
    var myStudent = this.studentList.findIndex((student) => {
      return student.Id == id;
    });
    if(myStudent == -1) {
      this.logService.log(`Update failed! Student Id: ${id} does not exists...`);
    }
    else{
      this.logService.log(`Details of Student Id: ${id} updated...`);
      this.studentList[myStudent] = obj;
    }
  }

  deleteStudent(id: any) {
    var myStudent = this.studentList.findIndex((student) => {
      return student.Id == id;
    });
    if(myStudent == -1) {
      this.logService.log(`Delete failed! Student Id: ${id} does not exists...`);
    }
    else{
      this.logService.log(`Student Id: ${id} deleted...`);
      this.studentList.splice(myStudent, 1);
      console.log(this.studentList);
    }
  }

}
