const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    Name: { type: String, required: true },
    Address: { type: String, required: true },
    Fees: {
        Amount: { type: Number, required: true },
        PaymentDate: { type: Date, default: Date.now },
        Status: { type: Boolean, required: true }
    },
    Result: {
        Hindi: { type: Number, required: true},
        Eng: { type: Number, required: true},
        Math: { type: Number, required: true},
        Total: { type: Number, required: true},
        Grade: { type: String, required: true}
    }
});

const StudentModel = mongoose.model("student", StudentSchema);

module.exports = StudentModel;