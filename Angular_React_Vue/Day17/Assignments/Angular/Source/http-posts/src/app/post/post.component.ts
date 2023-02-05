import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttppostsService } from '../httpposts.service';
import { Post } from '../Models/PostModel';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  PostForm: FormGroup;
  newPost!: Post;
  updatedPost!: Post;

  constructor(private fb: FormBuilder, private httpPostService: HttppostsService) { 
    this.PostForm = this.fb.group({
      id: [''],
      user_id: [''],
      title: [''],
      body: ['']
    })
  }

  ngOnInit(): void {
  }

  addPost() {
    this.newPost = this.PostForm.value;
    this.httpPostService.postPosts(this.newPost).subscribe((i: Post) => {
      this.newPost = i;
      console.log(this.newPost);
    })
  }

  editPost() {
    this.updatedPost = this.PostForm.value;
    this.httpPostService.putPosts(this.PostForm.value, this.PostForm.get("id")?.value).subscribe((i: Post) => {
      this.updatedPost = i;
      console.log(this.updatedPost);
    })
  }

}
