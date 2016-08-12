import React from 'react';
import helpers from '../../helpers';

const FoodResults = ({ foodData, origin }) => (
  <div className="dev-info">
    <p>
      name: { foodData.name }<br />
      rating: { foodData.rating }<br />
      foodLat: { foodData.location.coordinate.latitude }<br />
      foodLong: { foodData.location.coordinate.longitude }<br />
      address: { foodData.location.address }<br />
      bearing: { helpers.calculateBearing(origin, foodData.location.coordinate)}
    </p>
  </div>
);

FoodResults.propTypes = {
  foodData: React.PropTypes.object,
  origin: React.PropTypes.number,
};

export default FoodResults;
