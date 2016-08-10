import oauthSignature from 'oauth-signature';
import nonce from 'nonce';
import axios from 'axios';
import _ from 'underscore';
import qs from 'querystring';

const n = nonce();

const services = {
  handleYelpSearch: (req, res) => {
    const baseUrl = 'https://api.yelp.com/v2/search/';

    const defaultParams = {
      // need to generate location dynamically from GPS coords
      // yelp API needs this spelled out
      location: 'New+Orleans',
      sort: '2', // 0=Best matched (default), 1=Distance, 2=Highest Rated
    };

    const requiredParams = {
      oauth_consumer_key: process.env.YELP_CONSUMER_KEY,
      oauth_token: process.env.YELP_TOKEN,
      oauth_nonce: n(), // timestamp
      oauth_timestamp: n().toString().substr(0, 10),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_version: '1.0',
    };

    const term = `food+${req.query.food}`; // prepending with 'food' to only get restaurants
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
      console.log('Yelp search successful');
      res.send(results.data);
    })
    .catch(err => {
      console.error('yelp API error', err);
      res.send('yelp API error', err);
    });
  },
};

export default services;
