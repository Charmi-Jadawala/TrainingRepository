import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { FreeCoursesComponent } from './free-courses/free-courses.component';
import { ExploreCoursesComponent } from './explore-courses/explore-courses.component';
import { WorldClassLearningComponent } from './world-class-learning/world-class-learning.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';

// import { JwtModule } from "@auth0/angular-jwt";

import { CategoryService } from './Services/category.service';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { LoginService } from './Services/login.service';
import { SignupService } from './Services/signup.service';
import { ProtectedAPIsService } from './Services/protected-apis.service';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AuthService } from './Services/auth.service';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CourseService } from './Services/course.service';
import { CategoryDetailsComponent } from './admin/category-details/category-details.component';
import { SubcategoryDetailsComponent } from './admin/subcategory-details/subcategory-details.component';
import { EditCourseComponent } from './admin/edit-course/edit-course.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { EditSubcategoryComponent } from './admin/edit-subcategory/edit-subcategory.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { CourseDetailsComponent } from './admin/course-details/course-details.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { CourseComponent } from './course/course.component';
import { CourseLayoutComponent } from './course-layout/course-layout.component';
import { TopicContentComponent } from './topic-content/topic-content.component';
import { ModuleDetailsComponent } from './admin/module-details/module-details.component';
import { EditModuleComponent } from './admin/edit-module/edit-module.component';
import { EditTopicComponent } from './admin/edit-topic/edit-topic.component';
import { TopicDetailsComponent } from './admin/topic-details/topic-details.component';
import { AddModuleComponent } from './admin/add-module/add-module.component';
import { AddTopicComponent } from './admin/add-topic/add-topic.component';

// export function tokenGetter() { 
//   return sessionStorage.getItem("jwtToken"); 
// }

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CertificatesComponent,
    FreeCoursesComponent,
    ExploreCoursesComponent,
    WorldClassLearningComponent,
    FooterComponent,
    AdminLoginComponent,
    HomeComponent,
    WelcomeUserComponent,
    AdminFooterComponent,
    AdminHomeComponent,
    AdminDashboardComponent,
    CategoryDetailsComponent,
    SubcategoryDetailsComponent,
    EditCourseComponent,
    EditCategoryComponent,
    EditSubcategoryComponent,
    AddCourseComponent,
    CourseDetailsComponent,
    SearchCourseComponent,
    CourseComponent,
    CourseLayoutComponent,
    TopicContentComponent,
    ModuleDetailsComponent,
    EditModuleComponent,
    EditTopicComponent,
    TopicDetailsComponent,
    AddModuleComponent,
    AddTopicComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AngularEditorModule
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     allowedDomains: ["localhost:44322", "coursera-2399-charmi-api.radixind.in"],
    //     disallowedRoutes: []
    //   }
    // })
  ],
  providers: [CategoryService, CourseService, SignupService, LoginService, ProtectedAPIsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
