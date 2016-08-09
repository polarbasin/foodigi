import axios from 'axios';

const services = {
  handleYelpSearch: (req, res) => {
    console.log('req:', req.query);
    const term = `food%20${req.query.food}`;
    const cll = req.query.cll;

    // Need to grab location dynamically somehow
    const location = encodeURI('New Orleans');
    const endpoint = 'http://api.yelp.com/v2/search';

    axios.get(endpoint, {
      params: {
        term,
        location,
        cll,
      },
    })
    .then(results => {
      console.log(results);
      res.send(results);
    })
    .catch(err => {
      console.error('yelp API error', err);
      res.send('yelp API error', err);
    });
  },
};

export default services;
