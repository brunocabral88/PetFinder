const loginCaseController = (loginCase) => async (req, res) => {
  try {
    const jwtToken = await loginCase.execute(req.body.email, req.body.password);
    res.send({ token: jwtToken });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

module.exports = loginCaseController;
