import React from 'react';
import './Greetings.scss';
/**
 * @param  {} {firstName}
 * get the firstName from the user
 */
export default function Greeting({ firstName }) {
  return (
    <div className='header'>
      <h1>
        Hello <span>{firstName}</span>{' '}
      </h1>
      <p>Congratulations! You reached yesterday's goal!</p>
    </div>
  );
}
