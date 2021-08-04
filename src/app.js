const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');
const { notFound, errorHandler } = require('./middleware/defaults');
require('dotenv').config();
const winston = require('./middleware/winston');

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('combined', { stream: winston.stream }));

app.use('/api/v1', router);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
