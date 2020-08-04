/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const jwtUtils = require('../utils/jwt-utils');

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
};

const loginController = {
  login,
};

module.exports = loginController;
