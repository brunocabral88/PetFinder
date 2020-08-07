import PetEventsRepository from '../../../repositories/PetEventsRepository';
import CreatePetEventCase from './CreatePetEventCase';
import CreatePetEventCaseController from './CreatePetEventCaseController';

const repository = new PetEventsRepository();
const eventCase = new CreatePetEventCase(repository);
const createPetEventController = new CreatePetEventCaseController(eventCase);

export { createPetEventController };
