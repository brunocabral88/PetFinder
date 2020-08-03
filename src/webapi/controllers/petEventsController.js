const PetEvent = require('../models/PetEvent');

const listPetEvents = async (req, res) => {
  const { userId } = req.params;

  if (!userId) return res.sendStatus(400);

  const events = await PetEvent.find({ User: userId });

  return res.send(events);
};

const createPetEvent = async (req, res) => {
  const { userId } = req.params;

  const loggedUserId = req.user.id;

  if (!userId || !loggedUserId) return res.sendStatus(400);
  if (userId !== loggedUserId) return res.sendStatus(403);

  // const petEvent = { }

};

const petEventsController = {
  listPetEvents,
  createPetEvent,
};

module.exports = petEventsController;
