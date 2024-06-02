
const mongoose = require('mongoose')
const { Schema } = mongoose;


const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  accountnumber: {
    type: String,
    default : parseInt(Math.random() * 1e12),
    unique : true
  },
  accountbalance: {
    type: Number,
    default: 0,
    require: true
  }

});


module.exports = mongoose.model("User", UserSchema)
