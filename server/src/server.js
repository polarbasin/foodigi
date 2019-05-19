const express = require('express');
const path = require('path');
const morgan = require('morgan');

const services = require('./services');
// const testRouteHandlers = require('./testRouteHandlers');

module.exports = (app) => {
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  const publicPath = path.join(__dirname, '../../client/public/');

  app.use(express.static(publicPath));

  app.get('/api/v1/search', services.handleYelpSearch);
  // app.get('/api/v1/search', testRouteHandlers.fakeYelpSearch);
};
