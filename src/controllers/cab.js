const cabRouter = require('express').Router();
const tableName = require('../constants/tableNames');
const { CabRepository } = require('../repositories');

const controllerTable = tableName.CAB;

cabRouter.get('/', async (req, res, next) => {
  try {
    const whereObj = req.query.where ? JSON.parse(req.query.where) : {};
    const paginateObj = req.query.paginate ? JSON.parse(req.query.paginate) : {};
    const result = await CabRepository.find(
      controllerTable,
      whereObj,
      paginateObj,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

cabRouter.get('/count', async (req, res, next) => {
  try {
    const result = await CabRepository.count(
      controllerTable,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

cabRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const whereObj = { id };
    const result = await CabRepository.findOne(
      controllerTable,
      whereObj,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

cabRouter.post('/', async (req, res, next) => {
  try {
    const saveObj = req.body;
    const result = await CabRepository.save(
      controllerTable,
      saveObj,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

cabRouter.put('/:id', async (req, res, next) => {
  try {
    const updateObj = req.body;
    const { id } = req.params;
    const whereObj = { id };
    const result = await CabRepository.update(
      controllerTable,
      updateObj,
      whereObj,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

cabRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteObj = { id };
    const result = await CabRepository.delete(
      controllerTable,
      deleteObj,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = cabRouter;
