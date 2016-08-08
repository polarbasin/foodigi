import express from 'express';
import path from 'path';
import morgan from 'morgan';

export default function (app) {
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  const publicPath = path.join(__dirname, '../../client/public/');
  console.log(publicPath);

  app.use(express.static(publicPath));

  app.get('/api/v1/search', (req, res) => {
    console.log('req:', req.query);
    res.send(req.query);
  });
}
