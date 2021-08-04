const bookingRouter = require('express').Router();

bookingRouter.get('/', (req, res, next) => {
  try {
    res.json({
      status: 200,
      message: 'Success - booking',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = bookingRouter;
