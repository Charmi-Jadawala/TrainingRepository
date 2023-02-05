import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = "http://coursera-2399-charmi-api.radixind.in/api/";

  constructor(private http: HttpClient) { }

  getOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }

  //--------------------------------------------Categories------------------------------------------------
  getCategories(){
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/Category`, options);
    return this.http.get<Array<any>>(`${this.url}Category`, options);
  }
  
  getCategoriesActive(){
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/Category/Active`, options);
    return this.http.get<Array<any>>(`${this.url}Category/Active`, options);
  }

  getCategoryById(id: number) {
    const options = this.getOptions();
    // return this.http.get<any>(`https://localhost:44322/api/Category/${id}`, options);
    return this.http.get<any>(`${this.url}Category/${id}`, options);
  }

  
  //--------------------------------------------SubCategories------------------------------------------------
  getSubCategories(){
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/SubCategory`, options);
    return this.http.get<Array<any>>(`${this.url}SubCategory`, options);
  }
  
  getSubCategoriesActive(){
    const options = this.getOptions();
    // return this.http.get<Array<any>>(`https://localhost:44322/api/SubCategory/Active`, options);
    return this.http.get<Array<any>>(`${this.url}SubCategory/Active`, options);
  }

  getSubCategoryById(id: number) {
    const options = this.getOptions();
    // return this.http.get<any>(`https://localhost:44322/api/SubCategory/${id}`, options);
    return this.http.get<any>(`${this.url}SubCategory/${id}`, options);
  }
}
