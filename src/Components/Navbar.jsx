import React from "react";
import {Link} from "react-router-dom";


const Navbar = props => (
    <nav className={`navbar pixelBorder`}>
        <ul className={`navbar__list`}>
            <li className={`navbar__item`}>
                <Link className={`navbar__link`} to={'/'}>Home</Link>
            </li>
            <li className={`navbar__item`}>
                <Link className={`navbar__link`} to={'/profile'}>Profile</Link>
            </li>
            <li className={`navbar__item`}>
                <Link className={`navbar__link`} to={'/exit' } >Log out</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;









