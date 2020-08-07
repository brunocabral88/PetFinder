const PetEvent = require('../models/PetEvent');

export default interface IPetEventsRepository {
  createPetEvent(petEvent: any): Promise<typeof PetEvent>;
  findPetEventsNearby(lat: Number, long: Number, maxDistance: Number): Promise<typeof PetEvent[]>;
};
