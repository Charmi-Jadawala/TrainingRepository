import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-validation-form',
    templateUrl: './validation-form.component.html',
    styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent implements OnInit {

    ValidateForm: FormGroup;

    showData: boolean = false;

    constructor(private fb: FormBuilder) { 
        this.ValidateForm = fb.group(
            {
                Name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
                Contact: this.fb.group(
                    {
                        PhoneNo: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]{10}")])],
                        EmailId: ['', Validators.compose([Validators.email, Validators.required])]
                    }
                ),
                Age: ['', Validators.compose([Validators.required, Validators.max(100)])],
                City: ['', Validators.required]
            }
        )
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.showData = true;
        console.log(this.ValidateForm.value);
    }

    clear() {
        this.showData = false;
    }

}
