import React from 'react';

import Calories from '../images/calories-icon.svg';
import Proteins from '../images/protein-icon.svg';
import Carbs from '../images/carbs-icon.svg';
import Lipids from '../images/fat-icon.svg';
import './KeyData.scss';

export default function KeyData({
  calorieCount,
  proteinCount,
  carbohydrateCount,
  lipidCount,
}) {
  return (
    <div className='KeyData'>
      {/* Calories */}
      <div className='keyData__Element'>
        <img src={Calories} alt='Calories Icon' />
        <div className='keyData__Element-Info'>
          <p className='keyData__Element-Info--bold'>{calorieCount}kCal</p>
          <p className='keyData__Element-Info--light'>Calories</p>
        </div>
      </div>
      {/* Proteins */}
      <div className='keyData__Element'>
        <img src={Proteins} alt='Proteins Icon' />
        <div className='keyData__Element-Info'>
          <p className='keyData__Element-Info--bold'>{proteinCount}g</p>
          <p className='keyData__Element-Info--light'>Proteins</p>
        </div>
      </div>
      {/* Carbs */}
      <div className='keyData__Element'>
        <img src={Carbs} alt='Carbs Icon' />
        <div className='keyData__Element-Info'>
          <p className='keyData__Element-Info--bold'>{carbohydrateCount}g</p>
          <p className='keyData__Element-Info--light'>Carbs</p>
        </div>
      </div>
      {/* Liquids */}
      <div className='keyData__Element'>
        <img src={Lipids} alt='Carbs Icon' />
        <div className='keyData__Element-Info'>
          <p className='keyData__Element-Info--bold'>{lipidCount}g</p>
          <p className='keyData__Element-Info--light'>Lipids</p>
        </div>
      </div>
    </div>
  );
}
