import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttppostsService } from '../httpposts.service';
import { Post } from '../Models/PostModel';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postForm!: FormGroup;
  posts: Array<Post> = [];
  deletedPost!: any;

  constructor(private httpPostsService: HttppostsService) { }

  ngOnInit(): void {
    this.httpPostsService.getPosts().subscribe((i: Post[]) => {
      this.posts = i;
    });
  }

  updatePost(updatedPost: Post) {
    this.postForm.setValue(updatedPost);
  }

  deletePost(id: number) {
    this.httpPostsService.deletePosts(id).subscribe((i) => {
      this.deletedPost = i;
      console.log(this.deletedPost);
    })
  }

}
