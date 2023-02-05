const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    _id: { 
        type: Number, 
        required: [true, 'EmpId is required...'] 
    },
    FirstName: { 
        type: String, 
        required: [true, 'First Name is required...'], 
        minlength: [2, 'First Name should be valid...'] 
    },
    LastName: { 
        type: String, 
        required: [true, 'Last Name is required...'], 
        maxlength: [12, 'First Name should be valid...'] 
    },
    Assignments: [
        {
            _id: { 
                type: Number, 
                required: [true, 'Assignment ID is required...'] 
            },
            AssignmentCategory: { 
                type: String, 
                required: [true, 'Assignment Category is required...'] 
            },
            AssignmentName: { 
                type: String, 
                required: [true, 'Assignment Name is required...'] 
            },
            AssignmentStatus: { 
                type: String, 
                enum: { values: ['Completed', 'Pending'] }, 
                required: [true, 'Assignment Status is required...'] 
            }
        }
    ]
});

const EmployeeModel = mongoose.model("employee", EmployeeSchema);

module.exports = EmployeeModel;