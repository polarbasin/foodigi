import React from 'react';

import Compass from './Compass.jsx';

const Results = ({ heading }) => (
  <div id="results" className="search-results">
    <Compass heading={heading} />
  </div>
);

Results.propTypes = {
  heading: React.PropTypes.number,
};

export default Results;
