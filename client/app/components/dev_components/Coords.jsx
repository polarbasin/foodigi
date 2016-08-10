import React from 'react';

const Coords = ({ location, count, err }) => (
  <div className="dev-info">
    <p>
      status: { err.message }<br />
      updateCount: { count }<br />
      lat: { location.latitude }<br />
      long: { location.longitude }<br />
      acc: { location.accuracy }<br />
    </p>
  </div>
);

Coords.propTypes = { location: React.PropTypes.object };
Coords.propTypes = { count: React.PropTypes.number };
Coords.propTypes = { err: React.PropTypes.object };

export default Coords;
