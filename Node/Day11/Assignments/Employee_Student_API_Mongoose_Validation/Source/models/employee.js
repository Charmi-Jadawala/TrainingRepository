const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    EmpId: { type: Number, required: [true, 'EmpId is required...'] },
    FirstName: { type: String, required: [true, 'First Name is required...'] },
    LastName: { type: String, required: [true, 'Last Name is required...'] },
    Assignments: [
        {
            AssignmentId: { type: Number, required: [true, 'Assignment ID is required...'] },
            AssignmentCategory: { type: String, required: [true, 'Assignment Category is required...'] },
            AssignmentName: { type: String, required: [true, 'Assignment Name is required...'] },
            AssignmentStatus: { type: String, required: [true, 'Assignment Status is required...'] }
        }
    ]
});

const EmployeeModel = mongoose.model("employee", EmployeeSchema);

module.exports = EmployeeModel;