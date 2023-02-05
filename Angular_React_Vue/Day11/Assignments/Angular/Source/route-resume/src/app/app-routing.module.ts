import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { DetailsComponent } from './details/details.component';
import { EducationComponent } from './education/education.component';
import { ObjectiveComponent } from './objective/objective.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: "", component: ObjectiveComponent },
  { path: "objective", component: ObjectiveComponent },
  { path: "personaldetails", component: DetailsComponent },
  { path: "education", component: EducationComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "certifications", component: CertificationsComponent },
  { path: "contactdetails", component: ContactDetailsComponent },
  { path: "skills", component: SkillsComponent },
  { path: "declaration", component: DeclarationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
