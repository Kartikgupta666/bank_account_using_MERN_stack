
import React, { useState } from 'react'
import axios from 'axios'

const Depositmoney = () => {

    const [accountno, setaccountno] = useState('')
    const [money, setMoney] = useState('')

    async function submit() {


        try {
            await axios.patch("http://localhost:8000/api/account/depositmoney", {
                accountno: accountno,
                money: money
            })
                .then(res => {
                    
                })
                .catch(e => { console.log(e) })
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <br /><br />
            <br /><br />
            <form action="POST">
                <label htmlFor="accountno">Account No.</label>
                <input type="text" id="accountno" onChange={e => { setaccountno(e.target.value) }} />

                <label htmlFor="money">Money</label>
                <input type="number" id="money" onChange={e => { setMoney(e.target.value) }} />
                <button type="button" onClick={submit}>Send</button>
            </form>
        </>
    )
}

export default Depositmoney
