const cabRouter = require('express').Router();

cabRouter.get('/', (req, res, next) => {
  try {
    res.json({
      status: 200,
      message: 'Success - cab',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = cabRouter;
