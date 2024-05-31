const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const Account = require('../modals/Account')
const User = require('../modals/User')
const fetchuser = require('../middleware/fetchuser')

// Route 1 : get all the details using get request
router.get('/accountdetails', fetchuser, async (req, res) => {
    const accountdetails = await Account.find({ user: req.user.id });
    res.json(accountdetails)

})

// route 2 : deposit money using post request (login required)

router.post('/depositmoney', fetchuser, [
    body("depositmoney", "money is not less than 1rs").isInt({ min: 1 }),
], fetchuser, async (req, res) => {

    try {
        const { depositmoney } = req.body
        // is their error return bad req.
        const result = validationResult(req)

        if (!result.isEmpty()) {

            res.status(400).json({ errors: result.array([]) });
        }
        const id = req.user.id;

        const USER = await User.findById(id) //use to find name of the object
        USER.accountbalance += depositmoney;
        await USER.save();
        // console.log(USER)
        const name = USER.name

        const accountbalance = new Account({
            user: req.user.id,
            name: name,
            status: "deposit",
            money: depositmoney

        })
        const saveTransaction = await accountbalance.save();



        res.json(saveTransaction)
    } catch (error) {
        console.log(error)
        res.status(401).json("internal server occured")
    }



})


// route 3 : withdrawl money using post request (login required)

router.post('/Withdrawl', fetchuser, [
    body("withdrawlmoney", "money is not less than 1rs").isInt(),
], fetchuser, async (req, res) => {

    try {
        const { withdrawlmoney } = req.body
        // is their error return bad req.
        const result = validationResult(req)

        if (!result.isEmpty()) {

            res.status(400).json({ errors: result.array([]) });
        }
        const id = req.user.id;


        const USER = await User.findById(id) //use to find name of the object
        if (USER.accountbalance >= withdrawlmoney) {

            USER.accountbalance -= withdrawlmoney;
            await USER.save();
        }
        else {
            return res.json("not enough balance")
        }
        console.log(USER)
        const name = USER.name

        const accountbalance = new Account({
            user: req.user.id,
            name: name,
            status: "withdraw",
            money: withdrawlmoney

        })
        const saveTransaction = await accountbalance.save();



        res.json(saveTransaction)
    } catch (error) {
        console.log(error)
        res.status(401).json("internal server occured")
    }



})

module.exports = router
