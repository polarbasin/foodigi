import express from 'express';
import path from 'path';

export default function (app) {
  const publicPath = path.join(__dirname, '../../client/public/');
  console.log(publicPath);

  app.use(express.static(publicPath));
}
