import _ from 'underscore';
// import qs from 'querystring';
import cities from 'cities';
import axios from 'axios';
import yelp from 'yelp-fusion';

// eslint-disable-next-line
const API_KEY = `I8rf_v6SZVOhbHkwxvyaHvtbtP1ZGR3FsKUlvUSkkjgLeeUVP2DhG7vnAR-JTvNoAtwsaTM_2qp2HNnIgoYelu29tN4Jri8kD8rZIlZSL2Lre9mTVnKpgUFL3nfUXHYx`;

axios.defaults.headers.common = {
  Authorization: `Bearer ${API_KEY}`,
  'content-type': 'application/json',
};

const client = yelp.client(API_KEY);


const getZipCode = (cllString) => {
  const coords = cllString.split(',');
  const lat = parseFloat(coords[0]);
  const long = parseFloat(coords[1]);
  return cities.gps_lookup(lat, long).zipcode;
};

const services = {
  handleYelpSearch: (req, res) => {
    // const baseUrl = 'https://api.yelp.com/v3/businesses/search';

    const defaultParams = {
      sort_by: 'distance', // 0=Best matched (default), 1=Distance, 2=Highest Rated
      location: getZipCode(req.query.cll), // '70130'
      categories: 'food,restaurants',
    };

    // const requiredParams = {
    //   oauth_consumer_key: process.env.YELP_CONSUMER_KEY,
    //   oauth_token: process.env.YELP_TOKEN,
    //   oauth_nonce: n(), // timestamp
    //   oauth_timestamp: n().toString().substr(0, 10),
    //   oauth_signature_method: 'HMAC-SHA1',
    //   oauth_version: '1.0',
    // };

    const term = req.query.food;
    const cll = req.query.cll; // lat and long coords

    const params = _.extend(
      {},
      defaultParams,
      // requiredParams,
      { term, cll }
    );

    // const signature = oauthSignature.generate(
    //   'GET',
    //   baseUrl,
    //   params,
    //   process.env.YELP_CONSUMER_SECRET,
    //   process.env.YELP_TOKEN_SECRET,
    //   { encodeSignature: false }
    // );

    // params.oauth_signature = signature;

    // const queryString = qs.stringify(params);
    // const fullUrl = `${baseUrl}?${queryString}`;

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
    // axios.get(fullUrl, {
    //   proxy: {
    //     host: 'http://sjc1intproxy01.crd.ge.com',
    //     port: 8080,
    //   },
    // })
    // .then(results => {
    //   const business = results.data.businesses[0];
    //   console.log(`Yelp search for "${term}" successful.`);
    //   console.log(`sending client to ${business.name}..rating: ${business.rating}`);
    //   console.log(`${business.location.display_address}`);
    //   // should process results with custom algorithm before sending to client
    //   res.send(_.extend({},
    //     results.data,
    //     { err: '' }
    //   ));
    // })
    // .catch(err => {
    //   console.error('yelp API error man', err);
    //   res.send({
    //     err: 'Error with Yelp server. Please try again.',
    //     businesses: [],
    //   });
    // });
  },
};

export default services;
