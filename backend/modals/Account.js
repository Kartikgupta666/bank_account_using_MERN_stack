
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
   note: {
      type: String
   },
   status: {
      type: String
   },
   money: {
      type: Number,
      default: 0,
      require: true
   },
   date: {
      type: Date,
      default: Date.now
   }

});


module.exports = mongoose.model("Account", AccountSchema)
