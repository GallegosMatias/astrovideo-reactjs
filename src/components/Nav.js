import React, { useState, useEffect } from 'react';

import netflix from '../images/netflix-logo.png';
import avatar from '../images/avatar.jpg';

import '../styles/Nav.css';

function Nav() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<img src={netflix} className="nav_logo" alt="Netflix Logo"/>
			<img src={avatar}  className="nav_avatar" alt=":)"/>
		</div>
	);
}

export default Nav;
