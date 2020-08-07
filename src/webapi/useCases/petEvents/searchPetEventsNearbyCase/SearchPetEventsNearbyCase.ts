import IPetEventsRepository from "../../../repositories/IPetEventsRepository";

export default class SearchPetEventsNearbyCase {

  constructor(private petEventsRepository: IPetEventsRepository) {
  }

  public execute(lat: Number, long: Number, maxDistance: Number) {
    return this.petEventsRepository.findPetEventsNearby(lat, long, maxDistance);
  }
}