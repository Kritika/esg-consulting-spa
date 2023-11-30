// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="logo-container">
                        <img
                            src="./prakriti.jpeg"
                            alt="Prakriti Consulting Logo"
                            width="340"
                            height="190"
                        />
                </div>
                <div className="menu-container">
                

                    <ul className="menu">
                        <li>
                            <Link to="/prakriti">Home</Link>
                        </li>
                        <li>
                            <Link to="/prakriti/about">About</Link>
                        </li>
                        <li>
                            <Link to="/prakriti/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/prakriti/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/prakriti/contact">Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;



