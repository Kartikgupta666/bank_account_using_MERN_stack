import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {

    const history = useNavigate();
    const [accountNo, setAccountNo] = useState('')
    const [password, setPassword] = useState('')


    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/user/login", {
                accountnumber: accountNo,
                password: password,
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => {

                    // console.log(res.data.authToken)
                    if (res.data.success === true) {
                        // redirect
                        localStorage.setItem('token' , res.data.authToken)
                        history("/dashboard")
                    }
                    else {
                        console.log(res.data)
                    }


                }).catch(e => {
                    console.log(e)
                })
        }
        catch (e) {
            console.log(e);
        }
    }


    return (
        <>


            <form action="POST">

                <div style={{
                    "position": "relative",
                    "height": "500px",
                    "width": "300px",
                    "left": "40%",
                    "top": "50px"

                }}>
                    <h1>Login</h1>
                    <div className=" my-5 " >

                        <div className="mb-3 ">
                            <label htmlFor="accountNo" className="form-label">Account No.</label>
                            <input type="text" className="form-control" onChange={(e) => { setAccountNo(e.target.value) }} id="accountNo" placeholder="123456789" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} id="password" placeholder="Enter Password" />
                        </div>
                        <input className="btn btn-primary" type="submit" onClick={submit} value="Log in" />
                        &nbsp;&nbsp;&nbsp;
                        <Link className="btn btn-primary" to="/Register" role="button">Sign up</Link>

                    </div>
                </div>
            </form>

        </>

    )
}
