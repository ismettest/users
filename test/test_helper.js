const mongoose = require('mongoose');
const User = require('../src/user');

mongoose.connect('mongodb://test:test@ds145148.mlab.com:45148/users-test');
mongoose.connection
  .once('open', () => console.log('CONNECTED TO DATABASE!'))
  .on('error', (error) => console.log(`Warning: ${error}`));