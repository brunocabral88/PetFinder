const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.APP_PORT || 3001;

// Parsers
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// CORS
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));

// DB
const mongoose = require('mongoose');
mongoose.connect(process.env.APP_DB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
// eslint-disable-next-line no-console
db.once('open', () => console.log('Mongoose - Connected!'));
db.once('error', (err: Error) => Error(err.message));

// Router
const router = require('./router');

// Routes
app.use('/api', router);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
