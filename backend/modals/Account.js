
const mongoose = require('mongoose')
const { Schema } = mongoose;

const AccountSchema = new Schema({
   // accountnumber: {

   // },
   accountbalance: {
      type: Number,
      default: 0,
      require: true
   },
   summary: {
      type: String,
      require: true
   }

});


module.exports = mongoose.model("Account", AccountSchema)
