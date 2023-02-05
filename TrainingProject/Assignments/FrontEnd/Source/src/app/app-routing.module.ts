import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CategoryDetailsComponent } from './admin/category-details/category-details.component';
import { SubcategoryDetailsComponent } from './admin/subcategory-details/subcategory-details.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { EditSubcategoryComponent } from './admin/edit-subcategory/edit-subcategory.component';
import { EditCourseComponent } from './admin/edit-course/edit-course.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { CourseDetailsComponent } from './admin/course-details/course-details.component';
import { GuardService } from './Services/guard.service';
import { SearchCourseComponent } from './search-course/search-course.component';
import { CourseComponent } from './course/course.component';
import { CourseLayoutComponent } from './course-layout/course-layout.component';
import { TopicContentComponent } from './topic-content/topic-content.component';
import { ModuleDetailsComponent } from './admin/module-details/module-details.component';
import { TopicDetailsComponent } from './admin/topic-details/topic-details.component';
import { AddModuleComponent } from './admin/add-module/add-module.component';
import { EditTopicComponent } from './admin/edit-topic/edit-topic.component';
import { EditModuleComponent } from './admin/edit-module/edit-module.component';
import { AddTopicComponent } from './admin/add-topic/add-topic.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  {
    path: 'adminHome', component: AdminHomeComponent, canActivateChild: [GuardService],
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'category', component: CategoryDetailsComponent },
      { path: 'editCategory/:id', component: EditCategoryComponent },
      { path: 'subcategory', component: SubcategoryDetailsComponent },
      { path: 'editSubcategory/:id', component: EditSubcategoryComponent },
      { path: 'course', component: CourseDetailsComponent },
      { path: 'addCourse', component: AddCourseComponent },
      { path: 'editCourse/:id', component: EditCourseComponent },
      { path: 'modules/:id', component: ModuleDetailsComponent },
      { path: 'addModules/:id', component: AddModuleComponent },
      { path: 'editModule/:id', component: EditModuleComponent },
      { path: 'topics/:id', component: TopicDetailsComponent },
      { path: 'addTopics/:id', component: AddTopicComponent },
      { path: 'editTopic/:id', component: EditTopicComponent },
    ]
  },
  { path: 'welcomeUser', component: WelcomeUserComponent, canActivate: [GuardService] },
  { path: 'searchCourse', component: SearchCourseComponent },
  { path: 'course/:id', component: CourseComponent },
  { path: 'layout/:id', component: CourseLayoutComponent, canActivate: [GuardService] },
  { path: 'content/:id', component: TopicContentComponent, canActivate: [GuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
