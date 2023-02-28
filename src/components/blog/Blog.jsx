import React from 'react'
import "./blog.css"
function Blog() {
    return (
        <section className="blog">
            <div className="container">
                <div className="title">
                    <h2>Our blog</h2>
                </div>
                <div className="box">
                    <div className="post">
                        <img src="images/blog/blog1.jpeg" alt="blog1" />
                        <div className="date">19 Jan 2022</div>
                        <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <a className="readmorebtn" href="#">Read More <i className="fa-solid fa-right-long"></i></a>
                    </div>
                    <div className="post">
                        <img src="images/blog/blog2.jpg" alt="blog2" />
                        <div className="date">19 Jan 2022</div>
                        <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <a className="readmorebtn" href="#">Read More <i className="fa-solid fa-right-long"></i></a>
                    </div>
                    <div className="post">
                        <img src="images/blog/blog3.jpg" alt="blog3" />
                        <div className="date">19 Jan 2022</div>
                        <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <a className="readmorebtn" href="#">Read More <i className="fa-solid fa-right-long"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog