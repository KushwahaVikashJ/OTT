import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <h1 className="logo">NETFLIX</h1>
                </div>
                <div className="menu-container">
                    <ul className="menu-list">
                        <li className="menu-list-item active">SHOWS</li>
                        <li className="menu-list-item">MOVIES</li>
                        <li className="menu-list-item">APPS</li>
                    </ul>
                </div>
                <div className="profile-container">
                    Login
                </div>
            </div>
        </div>
    )
}

export default Navbar

