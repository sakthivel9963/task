const userRouter = require('express').Router();
const tableName = require('../constants/tableNames');
const { UserRepository } = require('../repositories');

userRouter.get('/', async (req, res, next) => {
  try {
    const whereObj = req.query.where ? JSON.parse(req.query.where) : {};
    const paginateObj = req.query.paginate ? JSON.parse(req.query.paginate) : {};
    const result = await UserRepository.find(
      tableName.USER,
      whereObj,
      paginateObj,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
