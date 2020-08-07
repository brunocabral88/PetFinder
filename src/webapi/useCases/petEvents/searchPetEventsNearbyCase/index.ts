import PetEventsRepository from '../../../repositories/PetEventsRepository';
import SearchPetEventsNearbyCase from './SearchPetEventsNearbyCase';
import SearchPetEventsNearbyCaseController from './SearchPetEventsNearbyCaseController';

const repository = new PetEventsRepository();
const searchPetEventsNearbyCase = new SearchPetEventsNearbyCase(repository);
const searchPetEventsNearbyCaseController = new SearchPetEventsNearbyCaseController(searchPetEventsNearbyCase);

export { searchPetEventsNearbyCaseController };
