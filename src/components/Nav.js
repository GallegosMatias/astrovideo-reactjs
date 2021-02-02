import React, { useState, useEffect } from 'react'

import '../styles/Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
       window.addEventListener("scroll", () => {
           if (window.scrollY > 100) {
               handleShow(true);
           } else handleShow(false);
       });
       return () => {
        window.removeEventListener("scroll");
       };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>

            <img className="nav_logo" src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-4-1.png" alt=""/>
            <img className="nav_avatar" src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg" alt=""/>

            
        </div>
    )
}

export default Nav
