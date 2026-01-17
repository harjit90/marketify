import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="w-100  text-center footer">
                <p>&copy; 2025 <NavLink className="copyrights_link" to="/">Marketify</NavLink>. All Rights reserved | <NavLink className="copyrights_link" to="/">Terms and Conditions</NavLink></p>
            </footer>
        </>
    )
}

export default Footer;