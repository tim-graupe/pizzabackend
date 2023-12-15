const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  name: { type: String, minLength: 1, maxLength: 50 },
  cash: { type: Number },
  mafia: { type: mongoose.Schema.Types.ObjectId, ref: "Mafia" },
  mafiosos: { type: Number },
  inventory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guns",
      type: mongoose.Schema.Types.ObjectId,
      ref: "Alcohol",
      type: mongoose.Schema.Types.ObjectId,
      ref: "Planes",
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cars",
    },
  ],
});

module.exports = mongoose.model("Comment", CommentSchema);
