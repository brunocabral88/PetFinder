const PetEvent = require('../models/PetEvent');

const createPetEvent = async (petEvent) => {
  const newPetEvent = { ...petEvent };
  return PetEvent.create(newPetEvent);
};

module.exports = {
  createPetEvent,
};
