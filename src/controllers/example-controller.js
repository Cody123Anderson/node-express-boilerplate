const { sum } = require('../utils/example-utils');

exports.getHomeRoute = (req, res) => {
  res.status(200).send({
    info: 'You\'ve successfully hit the home route',
    sum: sum(1, 2)
  });
};

exports.getAboutRoute = (req, res) => {
  res.status(200).send({
    info: 'You\'ve successfully hit the about route',
    sum: sum(2, 2)
  });
};
