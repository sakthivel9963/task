const userRouter = require('express').Router();

userRouter.get('/', (req, res, next) => {
  try {
    res.json({
      status: 200,
      message: 'Success - user',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
