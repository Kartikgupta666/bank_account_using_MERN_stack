import React from 'react'
// import { useSelector } from 'react-redux';

import { Link } from "react-router-dom";

export default function DashBoard() {


    // const accountno = useSelector(state => state.accountno)
    // const accountbal = useSelector(state => state.accountbal)
    return (
        <>
            <br /><br />
            <div className="container my-4 mt-5">
                <div className="row">
                    {/* Account Summary */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header">Account Summary</div>
                            <div className="card-body">
                                <h5 className="card-title">Account Balance</h5>
                                {/* <p className="card-text"> RS.{accountbal}/- </p> */}
                                <h5 className="card-title">Account Number</h5>
                                {/* <p className="card-text"> {accountno} </p> */}
                            </div>
                        </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="col-lg-8 col-md-6">
                        <div className="card mb-3">
                            <div className="card-header">Recent Transactions</div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Description</th>
                                            <th>Amount</th>
                                            <th>Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2024-05-15</td>
                                            <td>Deposit</td>
                                            <td>$1,000.00</td>
                                            <td>$10,000.00</td>
                                        </tr>
                                        <tr>
                                            <td>2024-05-10</td>
                                            <td>Withdrawal</td>
                                            <td>-$500.00</td>
                                            <td>$9,000.00</td>
                                        </tr>
                                        <tr>
                                            <td>2024-05-05</td>
                                            <td>Deposit</td>
                                            <td>$1,500.00</td>
                                            <td>$9,500.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card text-white bg-success mb-3">
                            <div className="card-header">Card Details</div>
                            <div className="card-body">
                                <h5 className="card-title">Credit Card</h5>
                                <p className="card-text">**** **** **** 1234</p>
                                <p className="card-text">Expiry: 12/25</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card text-white bg-warning mb-3">
                            <div className="card-header">Loan Information</div>
                            <div className="card-body">
                                <h5 className="card-title">Outstanding Loan</h5>
                                <p className="card-text">$5,000.00</p>
                                <p className="card-text">Next Payment: 2024-06-01</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card text-white bg-info mb-3">
                            <div className="card-header">Support</div>
                            <div className="card-body">
                                <h5 className="card-title">Contact Us</h5>
                                <p className="card-text">Phone: 1800-898-989</p>
                                <p className="card-text">Email: MoneyBank@reddif.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className='btn btn-primary'to='/FundTransfer' >FUND TRANSFER</Link>
                &nbsp;
                &nbsp;
                <Link className='btn btn-primary' to='/deposit' >Deposit Money</Link>

            </div>
        </>
    );
};