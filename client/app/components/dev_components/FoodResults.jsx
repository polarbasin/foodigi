import React from 'react';

const FoodResults = ({ foodData }) => (
  <div className="dev-info">
    <p>
      name: { foodData.name }<br />
      rating: { foodData.rating }<br />
      foodLat: { foodData.location.coordinate.latitude }<br />
      foodLong: { foodData.location.coordinate.longitude }<br />
      address: { foodData.location.address }<br />
    </p>
  </div>
);

FoodResults.propTypes = { foodData: React.PropTypes.object };

export default FoodResults;
