import React from 'react';
import '../App.css';
import Logo from "./Logo";
import TopMenu from "./TopMenu";

function Header() {
  return (
    <div className='wrapper'>
      <Logo/>
      <TopMenu/>
    </div>
  );
}

export default Header;
