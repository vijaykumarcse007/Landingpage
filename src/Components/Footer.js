import React from "react";
import Artboard1 from "./images/Artboard1.png"

const Footer =()=>{

    return(
        <div>
            <div className="footer">
            <div className="footer-left">
                <img src={Artboard1} alt="logo"/>
                <div className="address"><pre>
                    203, Abc road, xyz
                    <pre>
                        <br></br>
                    <b>Phone: </b>+91 44 4269 2288
                    </pre>
                    <br></br>
                    <pre><b>Email:</b>admin@prikshan.net.in</pre>
                    </pre></div>

            </div>
            <div className="footer1">
            <div className="footer-right">
                <div className="div1">
                    <span className="usefullink"><b>Useful Links</b></span>
                    <ul>
                        <li>Home</li>
                        <li>Servises</li>
                        <li>Training Region</li>
                        <li>Home</li>
                        <li>Sevices</li>
                    </ul>
                </div>
                <div className="div2">
                    <ul>
                        <li>Support</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="div3">
                    <span className="sitemap"><b>Sitemap</b></span>
                        <ul>
                            <li>Home</li>
                            <li>Servises</li>
                            <li>Training Region</li>
                            <li>Home</li>
                            <li>Sevices</li>
                            <li>Training Registration</li>
                        </ul>
                </div>
                
            </div>
            <div className="copy">Food Labs Inc @ Copyright 2022. All Rights Reserved</div>
            </div>
            


        </div>
        
        </div>
    )
}
export default Footer;