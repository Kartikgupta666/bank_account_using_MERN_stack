import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-white py-4 fixed-bottom ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; 2024 Bank of Money. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link to="#" className="text-white me-3">Privacy Policy</Link>
                            <Link to="#" className="text-white">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
