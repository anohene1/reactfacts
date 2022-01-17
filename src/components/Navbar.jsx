import React from "react";
import reactLogo from '../images/logo.png'

function Navbar() {
    return (
        <header>
            <nav className='nav'>
                <img src={reactLogo} alt="" className='nav--icon'/>
                <p className='nav--logo-text'>ReactFacts</p>
                <p className='nav--title'>React Course - Project 1</p>
            </nav>
        </header>
    );
}

export default Navbar;