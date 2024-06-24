import React, { useContext, useEffect } from 'react' //add use context
import { Link, useLocation, useNavigate } from "react-router-dom";
import AccountContext from '../Context/account/AccountContext';


export default function Navbar() {
    let location = useLocation();
    let history = useNavigate()

    const {user, getuser } = useContext(AccountContext)

    useEffect(() => {
        getuser()
        // eslint-disable-next-line
    }, [])

    const logout = () => {
        localStorage.removeItem('token')
        history('/')
    }

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
                                {/* <Link className= 'nav-link active' aria-current="page" to="/">Home</Link>  */}
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/dashboard" ? "active" : ""}`} to="/dashboard">Dashboard</Link>
                                {/* <Link className= 'nav-link active' to="/dashboard">Dashboard</Link>  */}
                            </li>
                            {!localStorage.getItem('token') ? (
                                <li className="nav-item">

                                    <Link className={`nav-link ${location.pathname === "/Login" ? "active" : ""}`} to="/Login">Login</Link>

                                </li>) : (
                                <li className="nav-item">

                                    <Link className={`nav-link ${location.pathname === "/Logout" ? "active" : ""}`} onClick={logout} to="/Login">Logout</Link>

                                </li>)}
                            {
                                localStorage.getItem('token') ?
                                    <li className="nav-item">
                                        <Link className="nav-link text-capitalize active" to="#" tabIndex="-1" aria-disabled="true"> {user.name} </Link>
                                    </li> : <li className="nav-item">
                                        <Link className="nav-link text-capitalize active" to="#" tabIndex="-1" aria-disabled="true"> {"Guest"} </Link>
                                    </li>}
                        </ul>
                    </div>
                </div>

            </nav>

        </>
    )
}
