import React from 'react';
import { Link } from 'react-router-dom';
import yoga from '../images/yoga.svg';
import swim from '../images/swim.svg';
import bike from '../images/bike.svg';
import dumbbell from '../images/dumbbell.svg';
import './VerticalNavigation.scss';

function VerticalNavigation() {
  return (
    <>
      <div className='container-vertical'>
        <nav className='nav'>
          <div className='nav__links'>
            <Link to='/'>
              <img src={yoga} alt='Yoga' />
            </Link>
            <Link to='/'>
              <img src={swim} alt='swim' />
            </Link>
            <Link to='/'>
              <img src={bike} alt='bike' />
            </Link>
            <Link to='/'>
              <img src={dumbbell} alt='dumbbell' />
            </Link>
          </div>
          <div className='nav__copyright'>
            <div>&#169; 2022 SportSee. All rights reserved</div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default VerticalNavigation;
