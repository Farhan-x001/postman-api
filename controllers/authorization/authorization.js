
const authorizationService = require("../../services/authorizationService");

authorizationController = {};


authorizationController.validate = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email & password parameters are required.' });
    }
    const isValidPassword = await authorizationService.validate(email, password);
  
    res.json(isValidPassword)
  } catch (error) {
    next(error);
  }
};

authorizationController.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }
    await authorizationService.registerUser(email, password);
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    next(error);
  }

}


module.exports = authorizationController;