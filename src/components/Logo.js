import React from 'react';
import '../App.css';
import logo from '../img/logo_alex_circle2.png';

function Logo() {
  return (
    <div className="logo">
      <img src={ logo } alt="Logo Alex" width={135} />
    </div>
);
}

export default Logo;
