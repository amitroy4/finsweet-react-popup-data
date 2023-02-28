import React from 'react'
import "./faq.css"

function Faq() {
    return (
        <section className="faq">
            <div className="container">
                <div className="box">
                    <div className="leftfaq">
                        <h3>Frequently asked questions</h3>
                        <p>Contact us for more info</p>
                    </div>
                    <div className="rightfaq">
                        <div className="holder">
                            <div className="bb">
                                <h2><span>01</span>How much time does it take? <i className="fa-solid fa-xmark"></i></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="holder">
                            <div className="bb">
                                <h2><span>02</span>How much time does it take? <i className="fa-solid fa-plus"></i></h2>
                            </div>
                        </div>
                        <div className="holder">
                            <div className="bb">
                                <h2><span>03</span>How much time does it take? <i className="fa-solid fa-plus"></i></h2>
                            </div>
                        </div>
                        <div className="holder">
                            <div className="bb">
                                <h2><span>04</span>How much time does it take? <i className="fa-solid fa-plus"></i></h2>
                            </div>
                        </div>
                        <div className="holder">
                            <div className="bb">
                                <h2><span>05</span>How much time does it take? <i className="fa-solid fa-plus"></i></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq