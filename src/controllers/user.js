const userRouter = require('express').Router();
const tableName = require('../constants/tableNames');
const { UserRepository } = require('../repositories');

userRouter.get('/', async (req, res, next) => {
  try {
    const whereObj = req.query;
    const result = await UserRepository.find(tableName.USER, whereObj);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
