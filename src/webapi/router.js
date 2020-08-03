const express = require('express');

const router = express.Router();
const { body } = require('express-validator');
const jwt = require('jsonwebtoken');
const loginController = require('./controllers/loginController');
const petEventsController = require('./controllers/petEventsController');

// Cases controllers
const createAccountCase = require('./useCases/accounts/createAccountCase');

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
  loginController.login,
);

router.post(
  '/signup',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 8 }).isAlphanumeric(),
  ],
  createAccountCase,
);

router.get('/:userId/pet-events', petEventsController.listPetEvents);

module.exports = router;
