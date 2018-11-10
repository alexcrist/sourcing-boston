const express = requre('express');
const cors = require('cors');
const router = require('./router');

const PORT = process.env.PORT || 5000;

// Initialize application
const app = express();
app.set('port', PORT);
app.use(cors);
app.use(bodyParser.json());
app.use(router);
app.listen(app.get('port'), () => {
  console.log('Starting back-end on port ' + PORT);
});

// Connect to MongoDB
const mongoUri = process.env.MONGODB_URI;
console.log('Connecting to MongoDB at ' + mongoUri);
mongoose.connect(mongoUri);

