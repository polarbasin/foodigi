import React from 'react';
import helpers from '../helpers';

const Distance = ({ origin, dest }) => (
  <div>
    <h3>{Math.floor(helpers.calculateDist(origin, dest))} feet away</h3>
  </div>
);

Distance.propTypes = {
  origin: React.PropTypes.object,
  dest: React.PropTypes.object,
};

export default Distance;
