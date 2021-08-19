import React from "react";
import logoImg from '../assets/logo/logo.png'

const start = () => {
    // let b = document.getElementsByClassName('header');
    // b[0].classList.toggle('add');
}

const Header = props => (
    <header  className={`header header_isDark`}>
        <div className={`header__inner_wrapper`}>
            <img className={`header__img`} src={logoImg} alt={`logo`} />
            <a className={`header__logo_text`} href={`/`}>THE LUCY</a>
        </div>
        <div onClick={start} className={'burger burger__menu'}>
            <img className="burger__img"
                 src="https://pbs.twimg.com/profile_images/1383184766959120385/MM9DHPWC_400x400.jpg" alt="avatar" />

        </div>
    </header>
);

export default Header;