import React from 'react';
import helpers from '../helpers';

const Distance = ({ origin, dest, foodQuery }) => (
  <div>
    <h3>{Math.floor(helpers.calculateDist(origin, dest))} feet<br />to {foodQuery}</h3>
  </div>
);

Distance.propTypes = {
  origin: React.PropTypes.object,
  dest: React.PropTypes.object,
  foodQuery: React.PropTypes.string,
};

export default Distance;
