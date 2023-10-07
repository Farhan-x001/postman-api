const User = require("../models/user");
const boom = require("@hapi/boom");

const authorizationService = {}


authorizationService.validate = async (email, password) => {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return { validEmail: false, validPassword: false };
      }
      const isValidPassword = password === user.password;
      return { validEmail: true, validPassword: isValidPassword }
    } catch (error) {
      throw error;
    }
  };


authorizationService.registerUser = async (email, password) => {
    try {
        const existingUser = await User.findOne({ where: { email: email } });

        if (existingUser) {
            return Promise.reject(boom.badRequest("user already exists"));
        }
        await User.create({
          email: email,
          password: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        console.log('User registered successfully');
      } catch (error) {
        console.error('Error registering user:', error);
        throw error;
      }
  }

module.exports = authorizationService;