import React from "react";
import logo from '../assets/images/logo.png';
import icon_phone from '../assets/images/ic_phone.svg';

import "./styles/Header.scss";


const Header = () => (
    <header className="header">
         <figure className="header__figure--logo">
           <img src={logo} />
         </figure>
         <figure className="header__figure--icon">
           <img src={icon_phone} />
           <span>
             Llámanos
           </span> 
         </figure>
         <figure className="header__figure--iconMedia">
           <span className="header__figure--question">
             ¿Tienes alguna duda?
           </span>
           <img src={icon_phone} className="header__figure--iconPhone"/>
           <span className="header__figure--phone">
             (01) 411 6001
           </span> 
         </figure>
    </header>
);


export default Header;