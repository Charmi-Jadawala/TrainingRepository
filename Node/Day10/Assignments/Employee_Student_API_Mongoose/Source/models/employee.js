const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    EmpId: { type: Number },
    FirstName: { type: String },
    LastName: { type: String },
    Assignments: [
        {
            AssignmentId: { type: Number },
            AssignmentCategory: { type: String },
            AssignmentName: { type: String },
            AssignmentStatus: { type: String }
        }
    ]
});

const EmployeeModel = mongoose.model("employee", EmployeeSchema);

module.exports = EmployeeModel;