import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'reactive-forms-1';

    showProfileForm: boolean = false;

    showUpdateForm: boolean = false;

    showValidatateForm: boolean = false;

    profileForm() {
        this.showProfileForm = true;
    }

    updateForm() {
        this.showUpdateForm = true;
    }

    validateForm() {
        this.showValidatateForm = true;
    }
}
