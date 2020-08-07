import IPetEventsRepository from "./IPetEventsRepository";

const PetEvent = require('../models/PetEvent');

export default class PetEventsRepository implements IPetEventsRepository {
  
  createPetEvent(petEvent: any): Promise<any> {
    const newPetEvent = { ...petEvent };
    return PetEvent.create(newPetEvent);
  };

  findPetEventsNearby(lat: Number, long: Number, maxDistance: Number): Promise<any[]> {
    return PetEvent.find({
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
  }
}
