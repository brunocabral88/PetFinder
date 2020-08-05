const petEventsRepository = require('../../../repositories/petEventsRepository');
const searchPetEventsNearbyCase = require('./searchPetEventsNearbyCase')(petEventsRepository);
const searchPetEventsNearbyCaseController = require('./searchPetEventsNearbyCaseController')(searchPetEventsNearbyCase);

module.exports = searchPetEventsNearbyCaseController;
