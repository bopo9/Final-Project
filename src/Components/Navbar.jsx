import React from "react";


const Navbar = props => (
    <nav className={`navbar pixelBorder`}>
        <ul className={`navbar__list`}>
            <li className={`navbar__item`}>
                <a className={`navbar__link`} href="">Home</a>
            </li>
            <li className={`navbar__item`}>
                <a className={`navbar__link`} href="">Profile</a>
            </li>
            <li className={`navbar__item`}>
                <a className={`navbar__link`} href="">Log out</a>
            </li>
        </ul>
    </nav>
);

export default Navbar;









