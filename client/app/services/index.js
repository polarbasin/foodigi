import axios from 'axios';

const services = {
  searchYelp: (food, lat, long) => {
    let reqURI = `/api/v1/search?food=${food}&cll=${lat},${long}`; 
    axios.get(reqURI)
      .then(res => {
        console.log('yelp search response:', res);
      })
      .catch(err => {
        console.error('Error searching Yelp', err);
      });
  },
};

export default services;
