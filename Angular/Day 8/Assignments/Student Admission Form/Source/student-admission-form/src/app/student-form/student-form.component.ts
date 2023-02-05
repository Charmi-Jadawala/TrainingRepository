import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-student-form',
    templateUrl: './student-form.component.html',
    styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

    StudentForm: FormGroup;
    showData: boolean = false;
    StudentList: Array<any> = [];

    constructor(private fb: FormBuilder) { 
        this.StudentForm = this.fb.group(
            {
                Name: this.fb.group(
                    {
                        FirstName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
                        MiddleName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
                        LastName: ['', Validators.compose([Validators.minLength(2), Validators.required])]  
                    }
                ),
                DOB: [''],
                POB: [''],
                FLang: [''],
                Address: this.fb.group(
                    {
                        City: [''],
                        State: [''],
                        Country: [''],
                        Pincode: ['', Validators.pattern("[0-9]{6}")]
                    }
                ),
                Father: this.fb.group({
                    Name: this.fb.group(
                        {
                            FirstName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
                            MiddleName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
                            LastName: ['', Validators.compose([Validators.minLength(2), Validators.required])]  
                        }
                    ), 
                    Email: ['', Validators.email],
                    EduQua: [''],
                    Profession: [''],
                    Desg: [''],
                    Phone: ['', Validators.pattern("[0-9]{10}")]
                }),
                Mother: this.fb.group({
                    Name: this.fb.group(
                        {
                            FirstName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
                            MiddleName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
                            LastName: ['', Validators.compose([Validators.minLength(2), Validators.required])]  
                        }
                    ), 
                    Email: [''],
                    EduQua: [''],
                    Profession: [''],
                    Desg: [''],
                    Phone: ['', Validators.pattern("[0-9]{10}")]
                }),
                Emergency: this.fb.array([
                   this.addPersonFormGroup() 
                ]),
                Reference: this.fb.array([
                    this.addReferenceFormGroup()
                ])
            }
        )
    }

    ngOnInit(): void {
    }

    get getEmergency() {
        return this.StudentForm.get("Emergency") as FormArray;
    }

    addPersonFormGroup(): FormGroup {
        return this.fb.group({
            Name: [''],
            Relation: [''],
            Phone: ['']
        });
    }

    addPerson() {
      this.getEmergency.push(this.addPersonFormGroup());
    }


    get getReference() {
        return this.StudentForm.get("Reference") as FormArray;
    }

    addReferenceFormGroup(): FormGroup {
        return this.fb.group({
            Details: [''],
            Through: [''],
            Add: [''],
            Phone: ['']
        });
    }

    addRef() {
        this.getReference.push(this.addReferenceFormGroup());
    }
    

    onSubmit() {
        console.log(this.StudentForm.value);
        this.StudentList.push(this.StudentForm.value);
        console.log(this.StudentList);
    }

    showDataList() {
        this.showData = true;
    }
}
