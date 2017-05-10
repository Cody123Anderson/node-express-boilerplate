const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const config = require('./src/config');
const exampleRoutes = require('./src/routes/example-routes');

// Set up logging
app.use(morgan('combined'));

// Allow parsing of request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS configuration - allow all the things
app.use(cors());

// Load routes into application
app.use('/', exampleRoutes);

app.listen(config.PORT, (err) => {
  if (err) console.error('Error starting server: ' + err);
  console.info('Running server on port: ' + config.PORT);
  console.info('Running in environment: ' + config.NODE_ENV);
});
