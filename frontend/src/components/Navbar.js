import React from 'react';
import useToken from "../Hooks/useToken";
import {Link} from "react-router-dom";

const Navbar = () => {
    const {token, removeToken} = useToken()

    const Links = () => {
        if (token) {
            // Logged in links
            return (
                <>
                    <Link to={'/dashboard'} className="nav-link active">Dashboard</Link>
                    <Link to={'/stats'} className="nav-link active">Statistics</Link>
                    <Link to={'/skill-assessment'} className="nav-link active">Skill Assessment</Link>
                    <Link to={'/behavioral'} className="nav-link active">Behavioral</Link>
                    <Link to={'/'} className="nav-link active" onClick={() => removeToken()}>Logout</Link>
                </>
            )
        } else {
            // Logged out links
            return (
                <>
                    <Link to={'/'} className="nav-link active">Home</Link>
                    <Link to={'/about'} className="nav-link active">About</Link>
                    <Link to={'/login'} className="nav-link active">Login</Link>
                    <Link to={'/register'} className="nav-link active">Register</Link>
                </>
            )
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <a className="navbar-brand" href="/">CodeNext</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Links />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
