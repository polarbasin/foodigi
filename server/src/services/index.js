const oauthSignature = require('oauth-signature');
const nonce = require('nonce');
const axios = require('axios');
const _ = require('underscore');
const qs = require('querystring');
const cities = require('cities');

const n = nonce();

const getZipCode = (cllString) => {
  const coords = cllString.split(',');
  const lat = parseFloat(coords[0]);
  const long = parseFloat(coords[1]);
  return cities.gps_lookup(lat, long).zipcode;
};

const services = {
  handleYelpSearch: (req, res) => {
    const baseUrl = 'https://api.yelp.com/v2/search/';

    const defaultParams = {
      sort: '1', // 0=Best matched (default), 1=Distance, 2=Highest Rated
      location: getZipCode(req.query.cll), // '70130'
      category_filter: 'food,restaurants',
    };

    const requiredParams = {
      oauth_consumer_key: process.env.YELP_CONSUMER_KEY,
      oauth_token: process.env.YELP_TOKEN,
      oauth_nonce: n(), // timestamp
      oauth_timestamp: n().toString().substr(0, 10),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_version: '1.0',
    };

    const term = req.query.food;
    const cll = req.query.cll; // lat and long coords

    const params = _.extend(
      {},
      defaultParams,
      requiredParams,
      { term, cll }
    );

    const signature = oauthSignature.generate(
      'GET',
      baseUrl,
      params,
      process.env.YELP_CONSUMER_SECRET,
      process.env.YELP_TOKEN_SECRET,
      { encodeSignature: false }
    );

    params.oauth_signature = signature;

    const queryString = qs.stringify(params);
    const fullUrl = `${baseUrl}?${queryString}`;

    axios.get(fullUrl)
    .then(results => {
      const business = results.data.businesses[0];
      console.log(`Yelp search for "${term}" successful.`);
      console.log(`sending client to ${business.name}..rating: ${business.rating}`);
      console.log(`${business.location.display_address}`);
      // should process results with custom algorithm before sending to client
      res.send(_.extend({},
        results.data,
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

module.exports = services;
