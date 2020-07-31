/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const jwtUtils = require('../jwt-utils');

const signUp = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  User.find({ email: req.body.email })
    .then((user) => {
      if (user !== null) return res.status(401).send({ errors: 'User already registered' });

      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) return res.sendStatus(400);

        User.create({ email: req.body.email, password: hash }, (errDoc) => {
          if (errDoc) return res.sendStatus(400);

          return res.sendStatus(200);
        });
      });
    });
};

const login = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) return res.status(401).send({ errors: 'Invalid credentials' });

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
          // Generate token
          const token = jwtUtils.getJwtToken(user);
          res.send({ token });
        } else {
          return res.status(401).send({ errors: 'Invalid credentials' });
        }
      });
    });
  // if (req.query.user === 'bruno' && req.query.password) {
  //   const token = jwtUtils.getJwtToken();
  //   res.send(token);
  // } else {
  //   res.status(400).send();
  // }
};

const loginController = {
  signUp,
  login,
};

module.exports = loginController;
