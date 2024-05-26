const express = require ("express")
const connectToMongo = require("./db")
const app = express()
const port = 3000
app.use(express.json())
connectToMongo()


app.use('/api/user' , require('./routes/auth'))
app.use('/api/account' , require('./routes/Account'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
