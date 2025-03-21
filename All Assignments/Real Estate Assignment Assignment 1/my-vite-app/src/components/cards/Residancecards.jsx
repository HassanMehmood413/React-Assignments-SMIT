import React from 'react';
import '../../single_components/popular_residance/PopularResidance.css';

export default function Residancecards({ image, name, location, label1, label2, label3 }) {
  return (
    <div className="residance-card">
      <div className="flex">

        <img src={image} alt="Not showing" />

        <h3>{name}</h3>
        <p>{location}</p>
        <ul className='labels'>

          <div className="content">
            <li className="labels-image">
              <img src={label1} alt="Not showing" />
              <p>Bed</p>
            </li>

            <li className="labels-image">
              <img src={label2} alt="Not showing" />
              <p>Bath</p>
            </li>

            <li className="labels-image">
              <img src={label3} alt="Not showing" />
              <p>23 SQFT.</p>
            </li>
          </div>

        </ul>
      </div>
    </div >
  );
}
