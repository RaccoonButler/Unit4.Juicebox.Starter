require('dotenv').config();

const { PORT = 3000 } = process.env;
const express = require('express');
const server = express();

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const morgan = require('morgan');
server.use(morgan('dev'));

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

const apiRouter = require('./api');
server.use('/api', apiRouter);

const { client } = require('./db');
client.connect();

// Serve static files from the 'public' directory
server.use(express.static('public'));

// Catch-all route to handle requests for the frontend app
server.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
