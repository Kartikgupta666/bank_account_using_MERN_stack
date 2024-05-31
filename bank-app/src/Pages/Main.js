import React from 'react'
import { Link } from 'react-router-dom'
export default function Main() {
    return (
        <>
            <br /><br />
           

            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <h1>Welcome to Bank of Money</h1>
                        <p className="lead">We provide secure and convenient banking solutions.</p>
                        <Link className="btn btn-primary" to="#Account" >Get Started</Link>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://media.istockphoto.com/photos/bank-picture-id528585263?k=6&m=528585263&s=170667a&w=0&h=TyDxqtSeEnftoQNMIcGHKcU7t4CuGZFUynjbghsf4I8=" alt="" className="img-fluid" style={{ "height": "500px" }} />
                    </div>
                </div>
            </div>
            <br /><br />



        </>
    )
}
