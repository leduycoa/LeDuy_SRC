const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/Duynodejx_dev', {
      useNewUrlparser: true,
      useUnifiedTopology: true,
    });
    console.log('connect successfully');
  } catch (error) {
    console.log('connect failure');
  }
}

module.exports = { connect };
