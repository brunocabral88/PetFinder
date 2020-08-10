import { Response, Request, NextFunction } from 'express';
import { createPetEventController } from './useCases/petEvents/createPetEventCase/index';
import { searchPetEventsNearbyCaseController } from './useCases/petEvents/searchPetEventsNearbyCase/index';
import { loginCaseController } from './useCases/accounts/loginCase';
import User from './models/User';
import { inspect } from 'util';

const express = require('express');

const router = express.Router();
const { body, query } = require('express-validator');
const jwt = require('jsonwebtoken');

// Cases controllers
const createAccountCase = require('./useCases/accounts/createAccountCase');
// const PetEvent = require('./models/PetEvent');


// eslint-disable-next-line no-unused-vars, consistent-return
const requireTokenAuthentication = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = req.query.token || (authHeader && authHeader.split(' ')[1]);

  if (!token) return res.sendStatus(401);

  // eslint-disable-next-line consistent-return
  jwt.verify(token, process.env.APP_JWT_SECRET, (err: any, user: any) => {
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
  async (req: any, res: any) => await loginCaseController.handleRequest(req,res),
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
  async (req: Request, res: Response) => await searchPetEventsNearbyCaseController.handleRequest(req, res));

router.post('/pet-events', [
  requireTokenAuthentication,
  body('petName').isString(),
  body('location.lat').isNumeric(),
  body('location.long').isNumeric(),
], async (req: Request, res: Response) => await createPetEventController.handleRequest(req, res));

module.exports = router;
