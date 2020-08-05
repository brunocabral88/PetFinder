const PetEvent = require('../models/PetEvent');

const createPetEvent = async (petEvent) => {
  const newPetEvent = { ...petEvent };
  return PetEvent.create(newPetEvent);
};

const findPetEventsNearby = async (lat, long, maxDistance) => PetEvent.find({
  location: {
    $near: {
      $geometry: {
        type: 'Point',
        coordinates: [long, lat],
      },
      $maxDistance: maxDistance,
      $minDistance: 0,
    },
  },
});

module.exports = {
  createPetEvent,
  findPetEventsNearby,
};
