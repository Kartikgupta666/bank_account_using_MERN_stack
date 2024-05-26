const express = require('express')
const router = express.Router()
const User = require('../modals/User')
const Account = require('../modals/Account')



router.post('/', (req, res) => {
    const { accountbalance, money } = req.body;

    const deposit = accountbalance + money

    res.send(`${deposit}`)

})

router.post('/deposit', async (req, res) => {
    const { accountnumber, depositmoney } = req.body;

    const id = await User.findById({ _id: accountnumber })
    if (id) {

        const updatemoney = id.accountbalance = id.accountbalance +  depositmoney
        await updatemoney.save()
        res.send("successful")

    }

})


module.exports = router
