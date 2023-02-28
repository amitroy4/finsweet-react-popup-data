import React from 'react'
import "./footer.css"

function Footer() {
    return (
        <footer>
            <div className="up">
                <div className="container box">
                    <div className="left">
                        <div className="box">
                            <div className="one">
                                <img src="images/logo.png" alt="logo" />
                                <p>We are always open to discuss your project and improve your online presence.</p>
                            </div>
                            <div className="two">
                                <div className="contact">
                                    <h3>Email me at</h3>
                                    <p>contact@website.com</p>
                                </div>
                                <div className="contact">
                                    <h3>Call us</h3>
                                    <p>0927 6277 28525</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h3>Lets Talk!</h3>
                        <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div className="down">
                <div className="container box">
                    <div className="left">
                        <p>Copyright 2022, Finsweet.com</p>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>FAQ</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer