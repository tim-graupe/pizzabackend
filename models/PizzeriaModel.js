const mongoose = require("mongoose");

const PizzeriaSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  pizzeria: { type: mongoose.Schema.Types.ObjectId, ref: "Pizzeria" },
  photo: { type: String },
  score: { type: Number },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Pizzeria", PizzeriaSchema);
