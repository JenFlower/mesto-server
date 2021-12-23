const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/users', require('./routes/users'));

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => console.log(`server on port ${PORT}`));
