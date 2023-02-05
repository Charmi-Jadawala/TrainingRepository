import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-update-form',
    templateUrl: './update-form.component.html',
    styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
    
    UpdateForm: FormGroup;
    name: string = "";

    constructor() {
        this.UpdateForm = new FormGroup(
            {
                Name: new FormGroup(
                    {
                        FirstName: new FormControl("Charmi"),
                        LastName: new FormControl("Jadawala")
                    }
                ),
                Age: new FormControl("21")
            }
        )
        this.name = this.UpdateForm.controls["FirstName"].value;
    }

    ngOnInit(): void {
    }

    

    updateFirstName() {
        this.UpdateForm.patchValue({
            Name: {
                FirstName: "Gopi"
            }
        });
    }

    get firstname() {
        return this.UpdateForm.get("FirstName");
    }

    onSubmit() {
        console.log(this.UpdateForm.value);
    }

}
