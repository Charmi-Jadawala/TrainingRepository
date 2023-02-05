const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    _id: { 
        type: Number, 
        required: [true, 'ID is required']
    },
    Name: { 
        type: String, 
        required: [true, 'Name is required...'], 
        minlength: [2, 'Name should be valid...'], 
        maxlength: [30, 'Name should be valid...']  
    },
    Address: { 
        type: String, 
        required: [true, 'Address is required...'] 
    },
    Fees: {
        Amount: { 
            type: Number, 
            required: [true, 'Amount is required...'], 
            min: [10000, 'Fees Amount should be valid...'],
            max: [40000, 'Fees Amount should be valid...']
        },
        PaymentDate: { 
            type: Date, 
            default: Date.now,     
        },
        Status: { 
            type: Boolean, 
            required: [true, 'Status is required...'] 
        }
    },
    Result: {
        Hindi: { 
            type: Number, 
            required: [true, 'Marks should be valid...'],
            min: [0, 'Marks should be valid...'],
            max: [100, 'Marks should be valid...']
        },
        Eng: { 
            type: Number, 
            required: [true, 'Marks should be valid...'],
            min: [0, 'Marks should be valid...'],
            max: [100, 'Marks should be valid...']
        },
        Math: { 
            type: Number, 
            required: [true, 'Marks should be valid...'],
            min: [0, 'Marks should be valid...'],
            max: [100, 'Marks should be valid...']
        },
        Total: { 
            type: Number, 
            required: [true, 'Marks should be valid...'],
            min: [0, 'Marks should be valid...'],
            max: [300, 'Marks should be valid...']
        },
        Grade: { 
            type: String, 
            enum: { values: ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'F'] }, 
            required: true
        }
    }
});

const StudentModel = mongoose.model("student", StudentSchema);

module.exports = StudentModel;