import React from 'react'
import "./banner.css"

const Banner = () => {
  return (
    <section className="banner">
        <div className="container">
            <div className="box">
                <div className="left">
                    <h1>Building stellar websites for early startups</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <a className="workbtn" href="#">View our work</a>
                    <a className="price" href="#">View Pricing <i className="fa-solid fa-right-long"></i></a>
                </div>
                <div className="right">
                    <img src="images/banner.png" alt="banner"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner