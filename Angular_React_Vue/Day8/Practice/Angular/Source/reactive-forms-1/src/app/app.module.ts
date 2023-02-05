import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileFormComponent,
    UpdateFormComponent,
    ValidationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
