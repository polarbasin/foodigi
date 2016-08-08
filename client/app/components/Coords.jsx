import React from 'react';

const Coords = ({ location }) => (
  <div>
    <p>lat: { location.latitude }</p>
    <p>long: { location.longitude }</p>
    <p>acc: { location.accuracy }</p>
  </div>
);

Coords.propTypes = { location: React.PropTypes.object };

export default Coords;
