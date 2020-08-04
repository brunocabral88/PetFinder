const createPetEventCase = (petEventsRepository) => {
  const execute = async (petEvent) => petEventsRepository.createPetEvent(petEvent);

  return { execute };
};

module.exports = createPetEventCase;
