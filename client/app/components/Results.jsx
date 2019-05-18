import React from 'react';

import Compass from './Compass.jsx';

const Results = ({ compassHeading, foodData, origin, foodQuery }) => (
  <div id="results" className="search-results">
    <Compass
      compassHeading={compassHeading}
      origin={origin}
      dest={foodData.coordinates}
      foodQuery={foodQuery}
    />
  </div>
);

Results.propTypes = {
  compassHeading: React.PropTypes.number,
  foodData: React.PropTypes.object,
  origin: React.PropTypes.object,
  foodQuery: React.PropTypes.string,
};

export default Results;
