
const mongoose = require('mongoose')
const { Schema } = mongoose;

const AccountSchema = new Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   name: {
      type: String
   },
   status: {
      type: String
   },
   accountbalance: {
      type: Number,
      default: 0,
      require: true
   }

});


module.exports = mongoose.model("Account", AccountSchema)
