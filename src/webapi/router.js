const express = require('express');

const router = express.Router();
const { body, query } = require('express-validator');
const jwt = require('jsonwebtoken');

// Cases controllers
const createAccountCase = require('./useCases/accounts/createAccountCase');
const loginCase = require('./useCases/accounts/loginCase');
const createPetEventCase = require('./useCases/petEvents/createPetEventCase');
const searchPetEventsNearbyCase = require('./useCases/petEvents/searchPetEventsNearbyCase');
// const PetEvent = require('./models/PetEvent');

// eslint-disable-next-line no-unused-vars, consistent-return
const requireTokenAuthentication = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = req.query.token || (authHeader && authHeader.split(' ')[1]);

  if (!token) return res.sendStatus(401);

  // eslint-disable-next-line consistent-return
  jwt.verify(token, process.env.APP_JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};

router.post(
  '/login',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 8 }),
  ],
  loginCase,
);

router.post(
  '/signup',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 8 }).isAlphanumeric(),
  ],
  createAccountCase,
);

router.get('/pet-events',
  [
    query('lat').isNumeric(),
    query('long').isNumeric(),
  ],
  searchPetEventsNearbyCase);

router.post('/pet-events', [
  requireTokenAuthentication,
  body('petName').isString(),
  body('location.lat').isNumeric(),
  body('location.long').isNumeric(),
], createPetEventCase);

module.exports = router;
