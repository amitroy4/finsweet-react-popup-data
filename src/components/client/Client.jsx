import React from 'react'
import "./client.css"

function Client() {
    return (
        <section className="client">
            <div className="container">
                <div className="box">
                    <div className="left">
                        <h2>What our clients say about us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </div>
                    <div className="right">
                        <h5>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>
                        <div className="clientinfo">
                            <div className="clientleft">
                                <img src="images/clients/client1.png" alt="client1"/>
                                    <h6>Jenny Wilson</h6>
                                    <p>Vice President</p>
                            </div>
                            <div className="clientright">
                                <i className="fa-sharp fa-solid fa-angle-left"></i>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Client