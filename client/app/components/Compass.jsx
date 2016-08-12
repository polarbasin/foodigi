import _ from 'underscore';

import React from 'react';
import helpers from '../helpers';
import Distance from './Distance.jsx';
import '../css/compassStyle.scss';

const degrees = _.range(0, 360, 30);
const cardLabels = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

// Referenced from https://github.com/jamesgpearce/compios5

const Compass = ({ compassHeading, origin, dest, foodQuery }) => (
  <div>
    <div id="compass" style={{ transform: `rotateZ(-${compassHeading}deg)` }} >
      <div id="spinner" style={{ transition: 'none' }}>
        <div id="pin" />
        <div
          id="needle"
          style={{
            WebkitTransform: `rotateZ(${helpers.calculateBearing(origin, dest)}deg)`,
          }}
        >
          <div id="arrow-up" />
        </div>
        {
          degrees.map((degree, i) => (
            <div
              className="degree"
              style={{ transform: `rotateZ(${degree}deg)` }}
              key={i}
            >
              {degree}
            </div>)
          )
        }
        {
          cardLabels.map((label, i) => (
            <div
              key={i}
              className={i % 2 ? 'point' : 'point main'}
              style={{ transform: `rotateZ(${i * 45}deg)` }}
            >
              {label}
            </div>
          ))
        }
      </div>
    </div>
    <Distance origin={origin} dest={dest} foodQuery={foodQuery} />
  </div>
);

Compass.propTypes = {
  compassHeading: React.PropTypes.number,
  origin: React.PropTypes.object,
  dest: React.PropTypes.object,
  foodQuery: React.PropTypes.string,
};

export default Compass;
