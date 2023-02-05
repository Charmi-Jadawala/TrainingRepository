const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    ID: { type: Number },
    Name: { type: String },
    Address: { type: String },
    Fees: {
        Amount: { type: Number },
        PaymentDate: { type: Date },
        Status: { type: Boolean }
    },
    Result: {
        Hindi: { type: Number},
        Eng: { type: Number},
        Math: { type: Number},
        Total: { type: Number},
        Grade: { type: String}
    }
});

const StudentModel = mongoose.model("student", StudentSchema);

module.exports = StudentModel;