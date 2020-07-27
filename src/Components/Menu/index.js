import React from 'react';
import Logo from '../../Assets/img/barbaflix.png';
import '../Menu.css';



function Menu (){
    return (
        <nav className="Menu">
        <a href="/">
        <img className="Logo" src={Logo} alt="BarbaFlix logo"/>
        </a>
      </nav>
    );
}

export default Menu;