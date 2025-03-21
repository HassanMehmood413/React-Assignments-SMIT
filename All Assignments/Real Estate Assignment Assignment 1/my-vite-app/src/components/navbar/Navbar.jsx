import React from 'react'
import { Link } from 'react-router'


export default function Navbar() {
    return (
        <nav className="navbar">

            <figure className="project-img">
                <img src={require('../../assets/Images/brand_logo.png')} alt="finance" loading="lazy" />
            </figure>

            <ul className="navbar-list">

                <li className="navbar-item">
                    <Link to="/" className="navbar-link home-underline">Home</Link>
                </li>

                <li className="navbar-item">
                    <Link to="/aboutus" className="navbar-link">About Us</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/home" className="navbar-link">Buying</Link>
                </li>


                <li className="navbar-item">
                    <Link to="/renting" className="navbar-link">Renting</Link>
                </li>

                <li className="navbar-item">
                    <Link to="/selling" className="navbar-link">Selling</Link>

                </li>

                <li className="navbar-item">
                    <Link to="/contactus" className="navbar-link">Contact Us</Link>

                </li>

                <div className="buttons">
                    <button className='login-btn'>
                        <h3>Login</h3>
                    </button>

                    <button className="signup-btn">
                        <h3>Sign In</h3>
                    </button>

                </div>

            </ul>


        </nav>
    )
}