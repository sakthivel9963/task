const authRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const tableName = require('../constants/tableNames');
const { UserRepository } = require('../repositories');

authRouter.post('/', async (req, res, next) => {
  try {
    const result = await UserRepository.findOne(
      tableName.USER,
      {
        email: req.body.email,
        password: req.body.password,
      },
    );
    if (!result.length) return res.status(400).send('Email or password is incorrect');

    const userData = { id: result[0].id };
    const token = jwt.sign(userData, process.env.TOKEN_SECRET);
    res.header('auth-token', token);
    res.send(token);
  } catch (error) {
    next(error);
  }
});

module.exports = authRouter;
