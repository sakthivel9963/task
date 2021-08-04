const router = require('express').Router();
const auth = require('./middleware/auth');
const {
  bookingRouter, userRouter, cabRouter, authRouter,
} = require('./controllers');

router.get('/ping', (req, res) => {
  res.json({
    status: 200,
    message: 'Success',
  });
});
router.use('/login', authRouter);
router.use('/user', [auth], userRouter);
router.use('/booking', [auth], bookingRouter);
router.use('/cab', [auth], cabRouter);

module.exports = router;
