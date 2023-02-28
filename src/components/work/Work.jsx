import React from 'react'
import "./work.css"
import WorkLayout from '../layout/WorkLayout'

const Work = () => {
    return (
        <section className="work">
            <div className="container">
                <div className="box">
                    <div className="left">
                        <div className="title">
                            <h2>How we work</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <a className="titlebtn" href="#">Get in touch with us <i className="fa-solid fa-right-long"></i></a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box">
                            <WorkLayout title="Strategy" photolink="images/work/work1.png" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                            <WorkLayout title="Wireframing" photolink="images/work/work2.png" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                            <WorkLayout title="Design" photolink="images/work/work3.png" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                            <WorkLayout title="Development" photolink="images/work/work4.png" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work