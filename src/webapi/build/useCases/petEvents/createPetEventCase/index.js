"use strict";
var petEventsRepository = require('../../../repositories/petEventsRepository');
var createPetEventCase = require('./createPetEventCase')(petEventsRepository);
var createPetEventController = require('./createPetEventCaseController')(createPetEventCase);
module.exports = createPetEventController;
