import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { useDispatch } from 'react-redux';
// import { actioncreators } from '../state/index'
// import { bindActionCreators } from 'redux';
export default function Signup() {
    // const dispatch = useDispatch()
    // const { showname } = bindActionCreators(actioncreators, dispatch)
    // const {ShowaccountNo} = bindActionCreators(actioncreators , dispatch)


    const history = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/api/user/signup", {
                name: name,
                email: email,
                password: password
            })
                .then(res => {
                    history("/dashboard")
                })
                .catch(e => {
                    alert("wronge details");
                    console.log(e);
                })
        }
        catch (e) {
            console.log(e)
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
                    <h1>Create account</h1>
                    <div className=" my-5 " >

                        <div className="mb-3 ">
                            <label htmlFor="Name" className="form-label">Name</label>
                            <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} id="Name" placeholder="enter user name" />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} id="email" placeholder="name@example.com" />
                        </div>
                        {/* <div className="mb-3 ">
                            <label htmlFor="accountno" className="form-label">AccountNo</label>
                            <input type="text" className="form-control" onChange={(e) => { setaccountno(e.target.value) }} id="accountno" placeholder="enter user name" />
                        </div> */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="c-password" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} id="c-password" placeholder="Enter Confirm Password" />
                        </div>
                        <input className="btn btn-primary" type="submit" onClick={submit} value="Confirm" />
                        &nbsp;&nbsp;&nbsp;
                        <Link className="btn btn-primary" to="/Login" role="button">Login in existing account</Link>

                    </div>
                </div>
            </form>

        </>
    )
}
