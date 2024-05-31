const express = require("express")
const connectToMongo = require("./db")
const app = express()
const port = 8000
const cors = require('cors');
app.use(cors())

app.use(express.json())
connectToMongo()


app.use('/api/user', require('./routes/Auth'))
app.use('/api/account', require('./routes/Account'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
