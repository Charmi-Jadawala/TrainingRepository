const mobike = require('./rent');
const fs = require('fs/promises');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var BikeNumber = 0;
var PhoneNumber = 0;
var CustomerName = "";
var NoOfDays = "";
var Rent = 0;

readline.question('Please enter your Bike No.: ', (BikeNo) => {
    BikeNumber = BikeNo;
    readline.question('Please enter your Phone No.: ', (PhoneNo) => {
        PhoneNumber = PhoneNo;
        readline.question('Please enter your Name.: ', (Name) => {
            CustomerName = Name;
            readline.question('Please enter your No. of days: ', (Days) => {
                NoOfDays = Days;

                const myBike = new mobike(BikeNumber, PhoneNo, Name, NoOfDays);
                Rent = myBike.compute(Days);

                async function appendData() {
                    try {
                        const data = `Bike No.: ${BikeNumber}, Phone No.: ${PhoneNo}, Name: ${Name}, No. of days: ${Days}, Charge: ${Rent}`;
                        await fs.appendFile('./BikeDetails.txt', data + '\n');
                        console.log("Data Appended...");
                        console.log(`Rent for ${Days} days: ${Rent}`);
                    }
                    catch(err) {
                        console.log(err);
                    }
                } 
                appendData();
            });
        });
    });
});

