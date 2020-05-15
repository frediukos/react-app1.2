import React from 'react';
import '../App.css';
import logo from '../img/logo_alex.png';

function Logo() {
  return (
    <div className="logo">
      <img src={ logo } alt="Logo Alex" width={73} />
    </div>
);
}

export default Logo;
