const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Name is required..."],
    minlength: [2, "Name should be valid..."],
    maxlength: [30, "Name should be valid..."]
  },
  Age: {
    type: Number,
    required: [true, "Age is required..."]
  },
  Doctors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor",
    }
  ],
  Department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "department",
    required: [true, "Age is required..."]
  },
  Medicines: {
    Morning: [
      {
        type: String,
        required: true
      },
    ],
    Afternoon: [
      {
        type: String,
        required: true
      },
    ],
    Night: [
      {
        type: String,
        required: true
      },
    ]
  }
});

module.exports = mongoose.model("patient", PatientSchema);
