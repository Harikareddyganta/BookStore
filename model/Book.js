const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// for a book we need name,author,description about book,price
// and if it is available or not
const BookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Book", BookSchema);
//Books will be searched in our database
