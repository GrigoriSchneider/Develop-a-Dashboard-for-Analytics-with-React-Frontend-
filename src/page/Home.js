import React from 'react';
import Fetch from '../components/Fetch';
import VerticalNavigation from '../components/VerticalNavigation';
import './Home.scss';

export default function Home() {
  return (
    <div className='container'>
      <VerticalNavigation />
      {/* id from the use we have two user 18 & 12 */}
      <Fetch id='18' />
    </div>
  );
}
