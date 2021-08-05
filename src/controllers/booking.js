const bookingRouter = require('express').Router();
const tableName = require('../constants/tableNames');
const { BookingRepository } = require('../repositories');

const controllerTable = tableName.BOOKING;

bookingRouter.get('/', async (req, res, next) => {
  try {
    const whereObj = req.query.where ? JSON.parse(req.query.where) : {};
    const paginateObj = req.query.paginate ? JSON.parse(req.query.paginate) : {};
    const result = await BookingRepository.find(
      controllerTable,
      whereObj,
      paginateObj,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

bookingRouter.get('/count', async (req, res, next) => {
  try {
    const result = await BookingRepository.count(
      controllerTable,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

bookingRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const whereObj = { id };
    const result = await BookingRepository.findOne(
      controllerTable,
      whereObj,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

bookingRouter.post('/', async (req, res, next) => {
  try {
    const saveObj = req.body;
    const result = await BookingRepository.save(
      controllerTable,
      saveObj,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
});

bookingRouter.put('/:id', async (req, res, next) => {
  try {
    const updateObj = req.body;
    const { id } = req.params;
    const whereObj = { id };
    await BookingRepository.update(
      controllerTable,
      updateObj,
      whereObj,
    );
    res.status(201).json();
  } catch (error) {
    next(error);
  }
});

bookingRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteObj = { id };
    await BookingRepository.delete(
      controllerTable,
      deleteObj,
    );
    res.status(201).json();
  } catch (error) {
    next(error);
  }
});

module.exports = bookingRouter;
