var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
  
  gid: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  authors: {
    type: [String],
    required: true
  },
  description: {
      type: String,
      required: true
  },
  image: {
      type: String,
      required: false
  },
  link: {
      type: String,
      required: true
  }
});


var Book = mongoose.model("Book", BookSchema);


module.exports = Book;