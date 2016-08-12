import React from 'react';

import FoodResults from './dev_components/FoodResults.jsx';
import Compass from './Compass.jsx';

const Results = ({ compassHeading, foodData, origin }) => (
  <div id="results" className="search-results">
    <FoodResults foodData={foodData} origin={origin} />
    <Compass
      compassHeading={compassHeading}
      origin={origin}
      dest={foodData.location.coordinate}
    />
  </div>
);

Results.propTypes = {
  compassHeading: React.PropTypes.number,
  foodData: React.PropTypes.object,
  origin: React.PropTypes.object,
};

export default Results;
