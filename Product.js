//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date
});


var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String },
    quantity: { type: Number },
    timestamp: { type: Date, default: Date.now()}
});

module.exports = mongoose.model('Products', ProductSchema);