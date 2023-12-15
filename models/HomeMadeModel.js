const mongoose = require("mongoose");

const HomeMadeSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  style: { type: mongoose.Schema.Types.ObjectId, ref: "Style" },
  recipe: { type: Array },X
  score: { type: Number },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});
module.exports = mongoose.model("Homemade", HomeMadeSchema);