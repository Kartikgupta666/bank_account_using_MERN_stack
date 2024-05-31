import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    let location = useLocation();

    React.useEffect(() => {
        console.log(location.pathname)
    }, [location]);

//by using uselocation hook to show which tab is open and the tab name on the nav bar is highlighted
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Money Bank </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/dashboard" ? "active" : ""}`} to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/Login" ? "active" : ""}`} to="/Login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-capitalize fw-bold" to="#" tabIndex="-1" aria-disabled="true">  </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
