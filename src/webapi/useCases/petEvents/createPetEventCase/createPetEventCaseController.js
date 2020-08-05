const { validationResult } = require('express-validator');

const controllerContainer = (createPetEventCase) => {
  const petEventCreateController = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).send(errors.array());

    try {
      let petEvent = {
        user: req.user.userId,
        petName: req.body.petName,
        petBreed: req.body.petBreed,
        location: {
          type: 'Point',
          coordinates: [req.body.location.long, req.body.location.lat],
        },
      };

      petEvent = await createPetEventCase.execute(petEvent);
      return res.send(petEvent);
    } catch (err) {
      return res.status(400).send(err.message);
    }
  };

  return petEventCreateController;
};

module.exports = controllerContainer;
