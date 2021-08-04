const router = require('express').Router();
const { bookingRouter, userRouter, cabRouter } = require('./controllers');

router.get('/ping', (req, res) => {
  res.json({
    status: 200,
    message: 'Success',
  });
});
router.use('/user', userRouter);
router.use('/booking', bookingRouter);
router.use('/cab', cabRouter);

module.exports = router;
