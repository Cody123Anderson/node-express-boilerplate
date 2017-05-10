const express = require('express');
const router = express.Router();

const exampleController = require('../controllers/example-controller');

// Middleware that is specific to only this router
router.use((req, res, next) => {
  console.info('Time: ', Date.now());
  next();
});

// Define the home route
router.get('/', exampleController.getHomeRoute);

// Define the about route
router.get('/about', exampleController.getAboutRoute);

module.exports = router;
