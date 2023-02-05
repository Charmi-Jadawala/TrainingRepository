const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Name is required..."],
    minlength: [2, "Name should be valid..."],
    maxlength: [30, "Name should be valid..."],
  },
  Assistants: [
    {
      type: String,
      required: [true, "Assistant Name is required..."],
    },
  ],
});

const DepartmentModel = mongoose.model("department", DepartmentSchema);

module.exports = DepartmentModel;
