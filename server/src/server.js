import express from 'express';
import path from 'path';
import morgan from 'morgan';

import services from './services';
// import testRouteHandlers from './testRouteHandlers';

export default function (app) {
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  const publicPath = path.join(__dirname, '../../client/public/');

  app.use(express.static(publicPath));

  app.get('/api/v1/search', services.handleYelpSearch);
  // app.get('/api/v1/search', testRouteHandlers.fakeYelpSearch);
}
