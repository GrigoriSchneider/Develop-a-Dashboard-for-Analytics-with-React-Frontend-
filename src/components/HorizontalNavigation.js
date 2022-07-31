import React from 'react';
import { Link } from 'react-router-dom';
import SportSeeLogo from '../images/sportsee.svg';
import './HorizontalNavigation.scss';

function HorizontalNavigation() {
  return (
    <div className='container-horizontal'>
      <nav className='nav'>
        <div className='nav__logo'>
          <Link to='/'>
            <img src={SportSeeLogo} alt='SportSee Logo' />
          </Link>
        </div>
        <div className='nav__links'>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/settings'>Settings</Link>
          <Link to='/community'>Community</Link>
        </div>
      </nav>
    </div>
  );
}

export default HorizontalNavigation;
