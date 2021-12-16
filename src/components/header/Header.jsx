import React from 'react';
import './Header.css';

const Header = () => {

    const openAuthMenu = () => {
        const headerArrow = document.querySelector('.header-arrow')
        const header__container_auth = document.querySelector('.header__container_auth')
        const rectangle = document.querySelector('.header__container_auth-rectangle')

        headerArrow.classList.toggle('header-arrow-open-close')

        header__container_auth.classList.toggle('header__container_auth-open')
        rectangle.classList.toggle('header__container_auth-rectangle-open')


    }

    return (
        <header className="header">
            <h1 className="header__title">Awesome Kanban Board</h1>
            <div className="header__login">
                <img src="/img/user-avatar.svg" alt="avatar" />   
                <img className='header-arrow' src="/img/arrow-down.svg" alt="arrow-down" onClick={openAuthMenu} />
                <img className='header__container_auth-rectangle' src="/img/Rectangle27.svg" alt="rectangle" />
                <div className='header__container_auth'>
                    <a href='#'>Profile</a>
                    <a href='#'>Log Out</a>
                </div>             
            </div>
        </header>
    );
};

export default Header;