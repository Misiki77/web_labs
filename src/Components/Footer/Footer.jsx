import React from 'react'
import "./Footer.css"
import logo from "../Assets/logo.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pinterest_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>ForGamers</p>
            </div>
            <div className='footer-about-company'>
                <p> You can always have a good time with us.<br />
                        Plunge into the virtual world.<br />
                    </p>
            </div>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>2023 IoT &copy; Copyright - all rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
