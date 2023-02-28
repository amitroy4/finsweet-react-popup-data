import React from 'react'

const WorkLayout = ({ title, photolink, para }) => {
    return (
        <div className="item">
            <img src={photolink} alt="work1" />
            <h4>{title}</h4>
            <p>{para}</p>
        </div>
    )
}

export default WorkLayout