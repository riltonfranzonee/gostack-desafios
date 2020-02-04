import React from 'react';
import path from 'path';

import facebooklogo from '../assets/images/facebooklogo.svg';
import usericon from '../assets/images/usericon.png';

function Header() {
  return (
    <header id="header">
      <img src={facebooklogo} alt="Facebook Logo" id="logo" />
      <div id="myprofile">
        <p>Meu Perfil</p>
        <img src={usericon} alt="User Icon" />
      </div>
    </header>
  );
}

export default Header;
