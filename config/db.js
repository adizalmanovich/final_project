const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:adiadi123@cluster0.0ir4bev.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

module.exports = mongoose;


