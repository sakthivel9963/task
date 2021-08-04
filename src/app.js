require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const rateLimit = require('express-rate-limit');
const router = require('./router');
const { notFound, errorHandler } = require('./middleware/defaults');
const winston = require('./middleware/winston');

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('combined', { stream: winston.stream }));

// ratelimiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // limit each IP to 100 requests per windowMs
  message:
    'Too many accounts created from this IP, please try again after an 15 minutes',
});
app.use(limiter);

app.use('/api/v1', router);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
