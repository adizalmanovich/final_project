const mongoose = require("mongoose");
const uri =
  "mongodb+srv://admin:TxOqj4Hwha5k6uAW@finalproject.rsuhyir.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
