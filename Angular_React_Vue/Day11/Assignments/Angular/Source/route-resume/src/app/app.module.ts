import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectiveComponent } from './objective/objective.component';
import { DetailsComponent } from './details/details.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectiveComponent,
    DetailsComponent,
    EducationComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactDetailsComponent,
    DeclarationComponent,
    SkillsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
