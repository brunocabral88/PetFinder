const petEventsRepository = require('../../../repositories/petEventsRepository');
const createPetEventCase = require('./createPetEventCase')(petEventsRepository);
const createPetEventController = require('./createPetEventCaseController')(createPetEventCase);

module.exports = createPetEventController;
