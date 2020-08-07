import IPetEventsRepository from "../../../repositories/IPetEventsRepository";
const PetEvent = require('../../../models/PetEvent');

export default class CreatePetEventCase {
  constructor(private petEventsRepository: IPetEventsRepository) {
  }

  public async execute(petEvent: typeof PetEvent) {
    return this.petEventsRepository.createPetEvent(petEvent);
  }
}
