const jwt = require('jsonwebtoken');

const getJwtToken = (payload) => jwt.sign(
  payload,
  process.env.APP_JWT_SECRET,
  {
    issuer: process.env.APP_JWT_ISSUER,
    audience: process.env.APP_JWT_AUDIENCE,
  },
);

module.exports = {
  getJwtToken,
};
