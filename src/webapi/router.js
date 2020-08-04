const express = require('express');

const router = express.Router();
const { body } = require('express-validator');
const jwt = require('jsonwebtoken');
// const loginController = require('./controllers/loginController');
const petEventsController = require('./controllers/petEventsController');

// Cases controllers
const createAccountCase = require('./useCases/accounts/createAccountCase');
const loginCase = require('./useCases/accounts/loginCase');
const createPetEventCase = require('./useCases/petEvents/createPetEventCase');
const PetEvent = require('./models/PetEvent');

// eslint-disable-next-line no-unused-vars, consistent-return
const authenticateToken = (req, res, next) => {
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

router.post('/pet-events', [
  body('petName').isString(),
  body('location.lat').isNumeric(),
  body('location.long').isNumeric(),
  authenticateToken,
], createPetEventCase);

router.get('/pet-events', async (req, res) => res.send(await PetEvent.find({}).populate('user')));

router.get('/:userId/pet-events', petEventsController.listPetEvents);

module.exports = router;
