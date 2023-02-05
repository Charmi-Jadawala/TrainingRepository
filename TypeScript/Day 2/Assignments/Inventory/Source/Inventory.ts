const products: {productName: string, quantity: number}[] = [
    {
        productName: "Pen",
        quantity: 6
    },
    {
        productName: "Pencil",
        quantity: 12
    },
    {
        productName: "Cheese",
        quantity: 4
    },
    {
        productName: "Watermelon",
        quantity: 10
    },
    {
        productName: "Chips",
        quantity: 9
    },
    {
        productName: "Soft Drinks",
        quantity: 5
    }
];

interface inventory{
    pName: string;
    pQuantity: number;
    getStatus(): void;
}

class productStatus implements inventory{
    pName: string;
    pQuantity: number;

    constructor(item: string, qty: number) { 
        this.pName = item;
        this.pQuantity = qty;
    }
    getStatus(): void{
        if(this.pQuantity > 5){
            console.log(`Your purchase of ${this.pName} was successful !`);
            this.pQuantity--;
            this.updateStatus(this.pQuantity);
        }
        else{
            console.log(`Oops there is a stock shortage...\n`);
        }
    }
    updateStatus(newqty: number){
        for(let i = 0; i < products.length; i ++){
            if(products[i].productName == this.pName){
                products[i].quantity = newqty;
                console.log(`Updated Status: ${products[i].productName} = ${products[i].quantity}\n`);
            }
        }  
    }
}

//Initial Stats
console.log(`Current Status: `);
console.log(products);
console.log("\n\n")

//Purchase Pencil
let myPencilPurchase1 = new productStatus(products[1].productName, products[1].quantity);
myPencilPurchase1.getStatus();

//Purchase Soft Drinks
let mySoftDrinksPurchase = new productStatus(products[5].productName, products[5].quantity);
mySoftDrinksPurchase.getStatus();

//Purchase Pen
let myPenPurchase = new productStatus(products[0].productName, products[0].quantity);
myPenPurchase.getStatus();

//Purchase Cheese
let myCheesePurchase = new productStatus(products[2].productName, products[2].quantity);
myCheesePurchase.getStatus();

//Purchase Chips
let myChipsPurchase = new productStatus(products[4].productName, products[4].quantity);
myChipsPurchase.getStatus();

//Purchase Watermelon
let myWatermelonPurchase = new productStatus(products[3].productName, products[3].quantity);
myWatermelonPurchase.getStatus();

//Purchase Pen
let myPenPurchase2 = new productStatus(products[0].productName, products[0].quantity);
myPenPurchase2.getStatus();

//Final Stats
console.log(`\n\nUpdated Status: `);
console.log(products);