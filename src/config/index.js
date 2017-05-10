const nodeEnv = process.env.NODE_ENV;
const port = process.env.PORT || 3000;

const config = {
  development: {
    NODE_ENV: nodeEnv,
    PORT: port
  },
  production: {
    NODE_ENV: nodeEnv,
    PORT: port
  }
};

module.exports = config[process.env.NODE_ENV];
