module.exports = class Mobike {
    constructor(BikeNumber, PhoneNumber, Name, Days) {
        this.BikeNumber = BikeNumber;
        this.PhoneNumber = PhoneNumber;
        this.Name = Name;
        this.Days = Days;
    }

    compute(Days) {
        var Charge;
        if (Days <= 5) {
            Charge = Days * 500;
        }
        else if (Days <= 10) {
            Charge = (5 * 500) + ((Days - 5) * 400);
        }
        else {
            Charge = (5 * 500) + (5 * 400) + ((Days - 10) * 200);
        }
        return Charge;
    }
}