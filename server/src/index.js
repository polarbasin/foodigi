import express from 'express';
import dotenv from 'dotenv';
import server from './server';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

const app = express();

const port = process.env.PORT || 9001;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

server(app);
