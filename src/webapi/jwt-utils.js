const jwt = require('jsonwebtoken');

const getJwtToken = () => jwt.sign(
  { userId: 1, userName: 'bruno' },
  process.env.APP_JWT_SECRET,
  {
    issuer: process.env.APP_JWT_ISSUER,
    audience: process.env.APP_JWT_AUDIENCE,
  },
);

module.exports = {
  getJwtToken,
};
