import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-india-usa',
    templateUrl: './india-usa.component.html',
    styleUrls: ['./india-usa.component.css']
})
export class IndiaUsaComponent implements OnInit {

    AtlanticMenu: Array<any> = [
        {
            "id": 1, 
            "item": "Kosher Meal"
        },
        {
            "id": 2, 
            "item": "Moslem Meal"
        },
        {
            "id": 3, 
            "item": "Vegetarian Meal"
        },
        {
            "id": 4, 
            "item": "Asian Meal"
        }
      ];
      
    PacificMenu: Array<any> = [
        {
            "id": 1, 
            "item": "SeaFood Meal"
        },
        {
            "id": 2, 
            "item": "Lacto Ovo Veg Meal"
        },
        {
            "id": 3, 
            "item": "Bland Meal"
        },
        {
            "id": 4, 
            "item": "Fruit Meal"
        }
    ];

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
    }

    viaAtlantic() {
        this.router.navigate(['atlantic'], { relativeTo: this.route});
    }
   
    viaPacific() {
       this.router.navigate(['pacific'], { relativeTo: this.route});
    }

    atlanticMenu(id: number) {
        this.router.navigate(['atlantic', id], { relativeTo: this.route});
    }
    
    
    pacificMenu(id: number){
        this.router.navigate(['pacific', id], { relativeTo: this.route});
    }

}
