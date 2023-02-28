import React from 'react'
import "./inquiry.css"

function Inquiry() {
    return (
        <section className="inquiry">
            <div className="container">
                <div className="box">
                    <div className="left">
                        <div className="layout">
                            <h2>Building stellar websites for early startups</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                        </div>
                    </div>
                    <div className="right">
                        <h2>Send inquiry</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <form>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Email" />
                            <input type="link" placeholder="Paste your Figma design URL" />
                            <button type="submit">Send an Inquiry</button>
                        </form>
                        <div className="getmore"><a className="getmorebtn" href="#">Get in touch with us <i className="fa-solid fa-right-long"></i></a></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inquiry