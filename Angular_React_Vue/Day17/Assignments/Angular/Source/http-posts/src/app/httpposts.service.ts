import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './Models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class HttppostsService {

  url: string = "https://gorest.co.in/public/v2/";
  accessToken: string = "cb434a80c95f5e8698c50cae96f8cb4c7b5da617356b72d58c96a28d7407eb99";

  constructor(private http: HttpClient) { }

  getOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${this.accessToken}`
      })
    };
    return httpOptions;
  }

  getPosts() {
    const options = this.getOptions();
    return this.http.get<Array<Post>>(`${this.url}posts`, options);
  }

  postPosts(newPost: Post) {
    const options = this.getOptions();
    return this.http.post<Post>(`${this.url}posts`, newPost, options);
  }

  putPosts(updatedPost: Post, id: number) {
    const options = this.getOptions();
    return this.http.put<Post>(`${this.url}posts/${id}`, updatedPost, options);
  }

  deletePosts(id: number) {
    const options = this.getOptions();
    return this.http.delete(`${this.url}posts/${id}`, options);
  }
}
