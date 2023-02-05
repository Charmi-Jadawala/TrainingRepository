import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  id: string = "";
  Name: string = "";
  Address: string = "";
  Gender: string = "";
  Doj: string = "";
  Hobbies: string = "";
  employeeArray: {"EmployeeID": string, "Name": string, "Address": string, "Gender": string, "DOJ": string, "Hobbies": string}[] = [];
  showData: boolean = false;

  month = new Date().getMonth();
  filteredArray: {"EmployeeID": string, "Name": string, "Address": string, "Gender": string, "DOJ": string, "Hobbies": string}[] = [];

  filterStatus: boolean = false;
  sortStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

    addData(){
        this.showData = true;
        this.employeeArray.push({
            EmployeeID: this.id,
            Name: this.Name,
            Address: this.Address,
            Gender: this.Gender,
            DOJ: this.Doj,
            Hobbies: this.Hobbies
        });
    }

    filterData(){
        this.filterStatus = true;
        for(let employee of this.employeeArray){
            let empMonth = employee.DOJ.split("-");
            let currentMonth = (this.month + 1).toString();
            if(currentMonth.length == 1){
               currentMonth = currentMonth.padStart(2, "0");
            }
            if(empMonth[1] == (currentMonth)){
                this.filteredArray.push(employee);   
            } 
        }
    }

    sortedData(){
        this.sortStatus = true;
        this.employeeArray.sort((a, b) => {
            let fa = a.Name.toLowerCase();
            let fb = b.Name.toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
    }
}

