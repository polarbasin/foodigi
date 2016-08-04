const express = require('express');

const app = express();

const port = process.env.PORT || 9001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
