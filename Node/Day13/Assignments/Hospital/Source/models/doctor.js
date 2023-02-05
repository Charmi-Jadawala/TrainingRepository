const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Name is required..."],
    minlength: [2, "Name should be valid..."],
    maxlength: [30, "Name should be valid..."]
  },
  Department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "department",
    required: [true, "Age is required..."]
  },
  Patients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patient"
    }
  ]
});

const DoctorModel = mongoose.model("doctor", DoctorSchema);

module.exports = DoctorModel;
