const express = require('express');
const chalk = require('chalk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');

const PORT = process.env.PORT || 5000;

// Initialize application
const app = express();
app.set('port', PORT);
app.use(cors());
app.use(bodyParser.json());
app.use(router);
app.listen(app.get('port'), () => {
  console.log(chalk.cyan('Starting application on port ') + PORT + chalk.cyan('.'));
});

// Connect to MongoDB
const mongoUri = process.env.MONGODB_URI;
console.log(chalk.cyan('Connecting to MongoDB at ') + mongoUri + chalk.cyan('.'));
mongoose.connect(mongoUri, { useNewUrlParser: true });

