import React from 'react';

const Coords = ({ location, count, err, compassHeading }) => (
  <div className="dev-info">
    <p>
      status: { err.message }<br />
      updateCount: { count }<br />
      lat: { location.latitude }<br />
      long: { location.longitude }<br />
      acc: { location.accuracy }<br />
      compassH: { compassHeading }<br />
    </p>
  </div>
);

Coords.propTypes = {
  location: React.PropTypes.object,
  count: React.PropTypes.number,
  err: React.PropTypes.object,
  compassHeading: React.PropTypes.number,
};

export default Coords;
