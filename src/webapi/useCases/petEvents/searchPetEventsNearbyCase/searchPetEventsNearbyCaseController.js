const { validationResult } = require('express-validator');

const caseContainer = (searchPetEventsNearbyCase) => {
  const searchPetEventsNearbyCaseController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(400).send(errors.array());

    return res.send(await searchPetEventsNearbyCase.execute(req.query.lat, req.query.long, 5000));
  };

  return searchPetEventsNearbyCaseController;
};

module.exports = caseContainer;
