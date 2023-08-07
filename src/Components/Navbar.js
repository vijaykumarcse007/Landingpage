import React from 'react';
import logo from './images/Artboard1.png'

const Navbar=()=>{
    

    return(
        <nav>
            <img src={logo} alt='logo'/>
            <ul>
                <li>
                    <a href="home">Home</a>
                    <a href="services">Services</a>
                    <a href="gallery">Gallery</a>
                    <a href="co-traveller">Co-taveller</a>
                    <a href="faqs">FAQs</a>
                    <a href="contactus">Contact Us</a>
                    <a href="registe">Register</a>
                    <div className="slider start-home"></div>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;