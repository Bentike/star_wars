import React from 'react';
import logo from './Images/Star_Wars_Logo.svg.png';
import './Styles/StarWarLogo.css';

function StarWarLogo() {
  return (
    <div>
        <img className='logo' src={logo} alt='star war'/>
    </div>
  )
}

export default StarWarLogo;