const userRouter = require('express').Router();
const tableName = require('../constants/tableNames');
const { UserRepository } = require('../repositories');

const controllerTable = tableName.USER;

userRouter.get('/', async (req, res, next) => {
  try {
    const whereObj = req.query.where ? JSON.parse(req.query.where) : {};
    const paginateObj = req.query.paginate ? JSON.parse(req.query.paginate) : {};
    const result = await UserRepository.find(
      controllerTable,
      whereObj,
      paginateObj,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

userRouter.get('/count', async (req, res, next) => {
  try {
    const result = await UserRepository.count(
      controllerTable,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

userRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const whereObj = { id };
    const result = await UserRepository.findOne(
      controllerTable,
      whereObj,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

userRouter.post('/', async (req, res, next) => {
  try {
    const saveObj = req.body;
    const result = await UserRepository.findOne(
      tableName.USER,
      {
        email: req.body.email,
      },
    );
    if (result.length) return res.status(400).send('Email already exists');
    await UserRepository.save(
      controllerTable,
      saveObj,
    );
    res.json({
      message: 'success',
    });
  } catch (error) {
    next(error);
  }
});

userRouter.put('/:id', async (req, res, next) => {
  try {
    const updateObj = req.body;
    const { id } = req.params;
    const whereObj = { id };
    const result = await UserRepository.update(
      controllerTable,
      updateObj,
      whereObj,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

userRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteObj = { id };
    const result = await UserRepository.delete(
      controllerTable,
      deleteObj,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
