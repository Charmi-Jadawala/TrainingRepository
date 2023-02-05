import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

    ProfileForm: FormGroup;
    showData: boolean = false;

    constructor() {
        this.ProfileForm = new FormGroup(
            {
                Name: new FormGroup(
                    {
                        FirstName: new FormControl(),
                        LastName: new FormControl()
                    }
                ),
                Address: new FormGroup(
                    {
                        FlatNo: new FormControl(),
                        Appartment: new FormControl(),
                        Landmark: new FormControl(),
                        Area: new FormControl(),
                        Pincode: new FormControl(),
                        City: new FormControl(),
                        State: new FormControl()
                    }
                ),
                Age: new FormControl(),
                Hobbies: new FormArray([
                    new FormControl()
                ])
            }
        );
    }

    ngOnInit(): void {
    }

    get hobbies() {
       return this.ProfileForm.get("Hobbies") as FormArray;
    }

    addHobbies() {
        this.hobbies.push(new FormControl());
    }

    onSubmit() {
        this.showData = true;
        console.log(this.ProfileForm.value);
    }

    clear() {
        this.showData = false;
    }

}
