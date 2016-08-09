import React from 'react';

const Coords = ({ location, count, err }) => (
  <div>
    <p>status: { err.message }</p>
    <p>updateCount: { count }</p>
    <p>lat: { location.latitude }</p>
    <p>long: { location.longitude }</p>
    <p>acc: { location.accuracy }</p>
  </div>
);

Coords.propTypes = { location: React.PropTypes.object };
Coords.propTypes = { count: React.PropTypes.number };
Coords.propTypes = { err: React.PropTypes.object };

export default Coords;
