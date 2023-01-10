const mongoose = require('mongoose')
const { Schema } = require("mongoose");

const userSchema = new Schema({
  firstname: { type: String, required: true } ,
  lastname: { type: String, required: true } ,
  email: { type: String, required: true } ,
  password: { type: String, required: true },
  image: { type: String } ,
  token: { type: String },
});

const users = mongoose.model("user", userSchema);
module.exports = {
  users
}