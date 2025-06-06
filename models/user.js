const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  role: { type: String, enum: ["Employer", "Employee"], default: "Employee" },
});

module.exports = mongoose.model("User", userSchema);
