const searchPetEventsNearbyCase = (petEventsRepository) => {
  // eslint-disable-next-line max-len
  const execute = async (lat, long, maxDistance) => petEventsRepository.findPetEventsNearby(lat, long, maxDistance);

  return { execute };
};

module.exports = searchPetEventsNearbyCase;
