import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    ProductData: {"ProductName": string, "Price": number, "Qty": number, "Amount": number, "PayableAmount": number}[] = [
        {
            ProductName: "Pen",
            Price: 20,
            Qty: 12,
            Amount: 240,
            PayableAmount: 228
        },
        {
            ProductName: "Pencil",
            Price: 10,
            Qty: 20,
            Amount: 200,
            PayableAmount: 190
        },
        {
            ProductName: "Eraser",
            Price: 4,
            Qty: 10,
            Amount: 40,
            PayableAmount: 38
        },
        {
            ProductName: "Sharpner",
            Price: 5,
            Qty: 16,
            Amount: 80,
            PayableAmount: 76
        },
        {
            ProductName: "Ink Pen",
            Price: 80,
            Qty: 4,
            Amount: 320,
            PayableAmount: 304
        },
        {
            ProductName: "Water Colors",
            Price: 60,
            Qty: 7,
            Amount: 420,
            PayableAmount: 399
        }
    ];

    
    constructor() { }

    ngOnInit(): void {
    }

}
