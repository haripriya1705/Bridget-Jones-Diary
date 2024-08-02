const { Router } = require('express');

const userController = require('../controllers/user.js');

const userRouter = Router();

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);

module.exports = userRouter;