import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
    @Output() getList = new EventEmitter<any>();

    postList: {"PostName": string, "PostDescription": string, "PostedDate": string, "PostedImage": string}[] = [
        {
            PostName: "Beach View",
            PostDescription: "Beach View Description", 
            PostedDate: "Jan 3, 2022",
            PostedImage: "../../assets/13_pexels-photo-3293148.jpeg"
        },
        {
            PostName: "Nutritious Food",
            PostDescription: "Nutritious Food Description", 
            PostedDate: "Jan 22, 2022",
            PostedImage: "../../assets/food1.jpeg"
        },
        {
            PostName: "Oceans",
            PostDescription: "Oceans Description", 
            PostedDate: "Feb 6, 2022",
            PostedImage: "../../assets/22ocean.jpg"
        },
        {
            PostName: "Monuments",
            PostDescription: "Monuments Description", 
            PostedDate: "Feb 13, 2022",
            PostedImage: "../../assets/25_pexels-photo-397431.jpeg"
        },
        {
            PostName: "Night Sky View",
            PostDescription: "Night Sky Description", 
            PostedDate: "Feb 27, 2022",
            PostedImage: "../../assets/5_pexels-photo-572897.jpeg"
        },
        {
            PostName: "Red Roses",
            PostDescription: "Red Roses Description", 
            PostedDate: "Mar 2, 2022",
            PostedImage: "../../assets/17_pexels-pixabay-15239.jpg"
        },
        {
            PostName: "Mountains",
            PostDescription: "Mountains Description", 
            PostedDate: "Mar 12, 2022",
            PostedImage: "../../assets/mountains.jpg"
        },
        {
            PostName: "Lotus Temple",
            PostDescription: "Lotus Temple Description", 
            PostedDate: "Mar 16, 2022",
            PostedImage: "../../assets/21_pexels-photo-1098460.jpeg"
        }
    ];

    likeList: {"PostName": string, "PostDescription": string, "PostedDate": string, "PostedImage": string}[] = [];

    constructor() { }

    ngOnInit(): void {
    }

    like(value: string) {
        for(let i = 0; i < this.postList.length; i ++){
            if(this.postList[i].PostName == value){
                this.likeList.push({
                    PostName: this.postList[i].PostName,
                    PostDescription: this.postList[i].PostDescription,
                    PostedDate: this.postList[i].PostedDate,
                    PostedImage: this.postList[i].PostedImage
                });
            }
        }
        this.getList.emit(this.likeList);
    }

}
