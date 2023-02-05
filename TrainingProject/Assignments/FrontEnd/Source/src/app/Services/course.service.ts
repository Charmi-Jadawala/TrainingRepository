import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url: string = "http://coursera-2399-charmi-api.radixind.in/api/";

  constructor(private http: HttpClient) { }

  getOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + ' ' + sessionStorage.getItem("jwtToken")
      })
    };
    return httpOptions;
  }


  //--------------------------------------------Courses------------------------------------------------
  getCourses() {
    const options = this.getOptions();
    //return this.http.get<Array<any>>(`https://localhost:44322/api/Course`, options);
    return this.http.get<Array<any>>(`${this.url}Course`, options);
  }

  getCoursesActive() {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/Course/Active`, options);
    return this.http.get<Array<any>>(`${this.url}Course/Active`, options);
  }

  getCourseById(id: number) {
    const options = this.getOptions();
    // return this.http.get<any>(`https://localhost:44322/api/Course/${id}`, options);
    return this.http.get<any>(`${this.url}Course/${id}`, options);
  }

  postCourses(newCourse: any) {
    const options = this.getOptions();
    //return this.http.post<any>(`https://localhost:44322/api/Course`, newCourse, options);
    return this.http.post<any>(`${this.url}Course`, newCourse, options);
  }

  putCourses(existingCourse: any) {
    const options = this.getOptions();
    // return this.http.put<any>(`https://localhost:44322/api/Course`, existingCourse, options);
    return this.http.put<any>(`${this.url}Course`, existingCourse, options);
  }

  alterStatusCourses(id: number) {
    const options = this.getOptions();
    // return this.http.put<any>(`https://localhost:44322/api/Course/soft/${id}`, options);
    return this.http.put<any>(`${this.url}Course/soft/${id}`, options);
  }

  getDurations() {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/Values/durations`, options);
    return this.http.get<Array<any>>(`${this.url}Values/durations`, options);
  }

  getLevels() {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/Values/levels`, options);
    return this.http.get<Array<any>>(`${this.url}Values/levels`, options);
  }

  getLanguagess() {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/Values/languages`, options);
    return this.http.get<Array<any>>(`${this.url}Values/languages`, options);
  }


  //--------------------------------------------Modules------------------------------------------------
  getModulesByCourse(id: number) {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/Module/ByCourseId/${id}`, options);
    return this.http.get<Array<any>>(`${this.url}Module/ByCourseId/${id}`, options);
  }

  getModuleByModuleId(id: number) {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/Module/${id}`, options);
    return this.http.get<Array<any>>(`${this.url}Module/${id}`, options);
  }

  postModules(newModule: any) {
    const options = this.getOptions();
    // return this.http.post<any>(`https://localhost:44322/api/Module`, newModule, options);
    return this.http.post<any>(`${this.url}Module`, newModule, options);
  }

  putModules(existingModule: any) {
    const options = this.getOptions();
    // return this.http.put<any>(`https://localhost:44322/api/Module`, existingModule, options);
    return this.http.put<any>(`${this.url}Module`, existingModule, options);
  }


  //--------------------------------------------Topics------------------------------------------------

  getTopicsByModuleId(id: number) {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/Topic/ByModuleId/${id}`, options);
    return this.http.get<Array<any>>(`${this.url}Topic/ByModuleId/${id}`, options);
  }

  getTopicByTopicId(id: number) {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/Topic/${id}`, options);
    return this.http.get<Array<any>>(`${this.url}Topic/${id}`, options);
  }

  postTopics(newTopic: any) {
    const options = this.getOptions();
    // return this.http.post<any>(`https://localhost:44322/api/Topic`, newTopic, options);
    return this.http.post<any>(`${this.url}Topic`, newTopic, options);
  }

  putTopics(existingTopic: any) {
    const options = this.getOptions();
    // return this.http.put<any>(`https://localhost:44322/api/Topic`, existingTopic, options);
    return this.http.put<any>(`${this.url}Topic`, existingTopic, options);
  }


  //--------------------------------------------Course Details------------------------------------------------
  getCourseDetails(id: number) {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/CourseMaterial/${id}`, options);
    return this.http.get<Array<any>>(`${this.url}CourseMaterial/${id}`, options);
  }

  getCourseInstructors(id: number) {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/CourseMaterial/instructors/${id}`, options);
    return this.http.get<Array<any>>(`${this.url}CourseMaterial/instructors/${id}`, options);
  }

  getCourseSkills(id: number) {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/CourseMaterial/skills/${id}`, options);
    return this.http.get<Array<any>>(`${this.url}CourseMaterial/skills/${id}`, options);
  }


  //--------------------------------------------Course Material------------------------------------------------
  getWeeks(id: number) {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/NoOfWeeks/${id}`, options);
    return this.http.get<Array<any>>(`${this.url}NoOfWeeks/${id}`, options);
  }

  getModules(weekNo: number, courseId: number) {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/CourseMaterial/${weekNo}/${courseId}`, options);
    return this.http.get<Array<any>>(`${this.url}CourseMaterial/${weekNo}/${courseId}`, options);
  }

  getContent(id: number) {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/Topic/${id}`, options);
    return this.http.get<Array<any>>(`${this.url}Topic/${id}`, options);
  }


  //--------------------------------------------User Courses------------------------------------------------
  getUserCourses(id: number) {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/UserCourse/user/${id}`, options);
    return this.http.get<Array<any>>(`${this.url}UserCourse/user/${id}`, options);
  }

  postUserCourse(newCourse: any) {
    const options = this.getOptions();
    // return this.http.post<any>(`https://localhost:44322/api/UserCourse`, newCourse, options);
    return this.http.post<any>(`${this.url}UserCourse`, newCourse, options);
  }


  //--------------------------------------------Search Courses------------------------------------------------
  getCourseByCategory(id: number) {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/Search/Category/${id}`, options);
    return this.http.get<Array<any>>(`${this.url}Search/Category/${id}`, options);
  }

  getCourseBySubCategory(id: number) {
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/Search/SubCategory/${id}`, options);
    return this.http.get<Array<any>>(`${this.url}Search/SubCategory/${id}`, options);
  }
}
