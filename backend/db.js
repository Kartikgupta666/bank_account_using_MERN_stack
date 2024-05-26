const mongoose = require("mongoose")

function connectToMongo() {

    mongoose.connect(`mongodb+srv://kartikgangil:health_app@cluster.zicryzz.mongodb.net/`)
        .then(() => {
            console.log("db connected")
        })
        .catch(e => {
            console.log(e)
        })
}

module.exports = connectToMongo