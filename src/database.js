const mongoose = require('mongoose');

mongoose.connect('mongodb://34.101.67.25/db_flowery', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => console.log('Database is Connected'))
  .catch(err => console.log(err));