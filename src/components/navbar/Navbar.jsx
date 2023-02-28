import React from 'react'
import { useState } from 'react'
import "./navbar.css"
import Popup from '../popup/Popup';


const Navbar = () => {
    let [show, setShow] = useState(false)

    let handleClick = () => {
        setShow(!show)
    }



    return (
        <>
            <nav>
                <div className="container">
                    <div className="box">
                        <div className="logo">
                            <img src="images/logo.png" alt="logo" />
                        </div>
                        <div className="navitem">
                            <ul>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>FAQ</li>
                                <li>Blog</li>
                            </ul>
                            <a onClick={handleClick}>Contact us</a>
                            {
                                show ? <div className='spopup'><Popup /></div> : ""
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar