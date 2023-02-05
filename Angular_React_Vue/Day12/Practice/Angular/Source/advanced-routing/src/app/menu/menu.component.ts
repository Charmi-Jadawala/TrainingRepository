import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    selectedId: number = 0;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((inp) => {
            this.selectedId = inp["id"];
        })
    }

}
