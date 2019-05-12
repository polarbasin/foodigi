import _ from 'underscore';
import cities from 'cities';
import yelp from 'yelp-fusion';

const client = yelp.client(process.env.API_KEY);


const getZipCode = (cllString) => {
  const coords = cllString.split(',');
  const lat = parseFloat(coords[0]);
  const long = parseFloat(coords[1]);
  return cities.gps_lookup(lat, long).zipcode;
};

const services = {
  handleYelpSearch: (req, res) => {

    const defaultParams = {
      sort_by: 'distance', // 0=Best matched (default), 1=Distance, 2=Highest Rated
      location: getZipCode(req.query.cll), // '70130'
      categories: 'food,restaurants',
    };

    const term = req.query.food;
    const cll = req.query.cll; // lat and long coords

    const params = _.extend(
      {},
      defaultParams,
      // requiredParams,
      { term, cll }
    );

    client.search(params, { headers: { 'content-type': 'application/json' } }).then(results => {
      const business = results.jsonBody.businesses[0];
      console.log(`Yelp search for "${term}" successful.`);
      console.log(`sending client to ${business.name}..rating: ${business.rating}`);
      console.log(`${business.location.display_address}`);
      // should process results with custom algorithm before sending to client
      res.send(_.extend({},
        results.jsonBody,
        { err: '' }
      ));
    })
    .catch(err => {
      console.error('yelp API error', err);
      res.send({
        err: 'Error with Yelp server. Please try again.',
        businesses: [],
      });
    });
  },
};

export default services;
