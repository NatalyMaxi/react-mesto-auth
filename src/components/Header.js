import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header({ loggedIn, userEmail, onSignOut }) {

   const location = useLocation();

   return (
      <header className="header">
         <img className="logo" src={logo} alt="Логотип" />

         {location.pathname === '/sign-in' && (
            <Link to="/sign-up" className="header__link">
               Регистрация
            </Link>
         )}

         {location.pathname === '/sign-up' && (
            <Link to="/sign-in" className="header__link">
               Войти
            </Link>
         )}

         {loggedIn && (
            <nav className="header__nav">
               <span className="header__email">{userEmail}</span>
               <span className="header__link-exit" onClick={() => onSignOut()}>
                  Выйти
               </span>
            </nav>
         )}
      </header>
   )
}

export default Header;