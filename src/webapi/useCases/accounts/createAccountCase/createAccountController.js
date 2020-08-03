const { validationResult } = require('express-validator');

const controllerContainer = (createUserCase) => {
  const createAccountController = async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).send({ error: 'E-mail and password fields are mandatory' });
      }

      const user = { email: req.body.email, password: req.body.password };
      await createUserCase.execute(user);

      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).send({ error: err.message || 'An error has occurred' });
    }
  };

  return createAccountController;
};

module.exports = controllerContainer;
