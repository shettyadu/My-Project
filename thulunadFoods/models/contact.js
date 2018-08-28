const mongoose = require('mongoose');
var Schema = mongoose.Schema;
    ObjectId = Schema.ObjectId;
// contact Schema
var contactSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
  },
  email:{
    type: String,
    required: true
  },
  message:{
    type: String,
    required:true
  }
	});

const Contact = module.exports = mongoose.model('Contact', contactSchema);
