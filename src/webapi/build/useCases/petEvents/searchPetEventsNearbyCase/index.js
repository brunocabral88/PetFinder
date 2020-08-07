"use strict";
var petEventsRepository = require('../../../repositories/petEventsRepository');
var searchPetEventsNearbyCase = require('./searchPetEventsNearbyCase')(petEventsRepository);
var searchPetEventsNearbyCaseController = require('./searchPetEventsNearbyCaseController')(searchPetEventsNearbyCase);
module.exports = searchPetEventsNearbyCaseController;
