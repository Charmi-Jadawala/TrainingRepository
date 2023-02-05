import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    userDetails: Array<any> = [
        {
            "userID": 1,
            "userName": "Roy",
            "Gender": "Male",
            "Designation": "Developer",
            "PanNumber":"335454"
        },
        {
            "userID": 2,
            "userName": "Rohit", 
            "Gender": "Male",
            "Designation": "Junior Developer",
            "PanNumber": "abcd"
        }
    ];

    displayID: number = 0;

    displayList: Array<any> = [];

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(inp => {
            this.displayID = inp["id"];
            this.displayList = this.userDetails.filter(data => {
                return data.userID == this.displayID;
            });
        });
    }
}
