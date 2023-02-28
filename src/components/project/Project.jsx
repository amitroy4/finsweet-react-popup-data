import React from 'react'
import "./project.css"

const Project = () => {
    return (
        <section className="project">
            <div className="container">
                <div className="box">
                    <div className="left">
                        <div className="title">
                            <h2>View our projects</h2>
                        </div>
                    </div>
                    <div className="right">
                        <div className="title">
                            <a className="titlebtn" href="#">Get in touch with us <i className="fa-solid fa-right-long"></i></a>
                        </div>
                    </div>
                </div>
                <div className="mt">
                    <div className="box">
                        <div className="leftimg">
                            <img src="images/project/project1.png" alt="project1" />
                            <div className="overlay">
                                <div className="text">
                                    <h3>Workhub office Webflow Webflow Design</h3>
                                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                                    <div className="title">
                                        <a className="titlebtn" href="#">View project <i className="fa-solid fa-right-long"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rightimg">
                            <div className="imgbox">
                                <img src="images/project/project2.png" alt="project2" />
                                <div className="smalloverlay">
                                    <div className="text">
                                        <h3>Unisaas Website Design</h3>
                                        <div className="title">
                                            <a className="titlebtn" href="#">View project <i className="fa-solid fa-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="imgbox">
                                <img src="images/project/project3.png" alt="project3" />
                                <div className="smalloverlay">
                                    <div className="text">
                                        <h3>Unisaas Website Design</h3>
                                        <div className="title">
                                            <a className="titlebtn" href="#">View project <i className="fa-solid fa-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project