import _ from 'underscore';

import React from 'react';
import helpers from '../helpers';
import Distance from './Distance.jsx';
import '../css/compassStyle.scss';

const degrees = _.range(0, 360, 30);
const cardLabels = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

// Referenced from https://github.com/jamesgpearce/compios5

const Compass = ({ compassHeading, origin, dest }) => (
  <div>
    <div id="compass" style={{ transform: `rotateZ(-${compassHeading}deg)` }} >
      <div id="spinner" style={{ transition: 'none' }}>
        <div id="pin" />
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
        <div
          id="needle"
          style={{
            WebkitTransform: `rotateZ(-${helpers.calculateBearing(origin, dest) - 90}deg)`,
          }}
        />
      </div>
    </div>
    <Distance origin={origin} dest={dest} />
  </div>
);

Compass.propTypes = {
  compassHeading: React.PropTypes.number,
  origin: React.PropTypes.object,
  dest: React.PropTypes.object,
};

export default Compass;
