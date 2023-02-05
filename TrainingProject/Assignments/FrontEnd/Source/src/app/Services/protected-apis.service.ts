import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProtectedAPIsService {

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

  //--------------------------------------------Categories------------------------------------------------
  postCategories(newCategory: any) {
    const options = this.getOptions();
    // return this.http.post<any>(`https://localhost:44322/api/Category`, newCategory, options);
    return this.http.post<any>(`${this.url}Category`, newCategory, options);
  }

  putCategories(existingCategory: any){
    const options = this.getOptions();
    // return this.http.put<any>(`https://localhost:44322/api/Category`, existingCategory, options);
    return this.http.put<any>(`${this.url}Category`, existingCategory, options);
  }

  alterStatusCategories(id: number) {
    const options = this.getOptions();
    // return this.http.put<any>(`https://localhost:44322/api/Category/soft/${id}`, options);
    return this.http.put<any>(`${this.url}Category/soft/${id}`, options);
  }


  //--------------------------------------------SubCategories------------------------------------------------
  postSubCategories(newSubCategory: any) {
    const options = this.getOptions();
    //return this.http.post<any>(`https://localhost:44322/api/SubCategory`, newSubCategory, options);
    return this.http.post<any>(`${this.url}SubCategory`, newSubCategory, options);
  }

  putSubCategories(existingSubCategory: any){
    const options = this.getOptions();
    // return this.http.put<any>(`https://localhost:44322/api/SubCategory`, existingSubCategory, options);
    return this.http.put<any>(`${this.url}SubCategory`, existingSubCategory, options);
  }

  alterStatusSubCategories(id: number) {
    const options = this.getOptions();
    // return this.http.put<any>(`https://localhost:44322/api/SubCategory/soft/${id}`, options);
    return this.http.put<any>(`${this.url}SubCategory/soft/${id}`, options);
  }

}
