import React from 'react';

import FoodResults from './dev_components/FoodResults.jsx';
import Compass from './Compass.jsx';

const Results = ({ compassHeading, foodData, origin, foodQuery }) => (
  <div id="results" className="search-results">
    <Compass
      compassHeading={compassHeading}
      origin={origin}
      dest={foodData.location.coordinate}
      foodQuery={foodQuery}
    />
    <FoodResults foodData={foodData} origin={origin} compassHeading={compassHeading} />
  </div>
);

Results.propTypes = {
  compassHeading: React.PropTypes.number,
  foodData: React.PropTypes.object,
  origin: React.PropTypes.object,
  foodQuery: React.PropTypes.string,
};

export default Results;
