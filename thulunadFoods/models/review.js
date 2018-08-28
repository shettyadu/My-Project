const mongoose = require('mongoose');
var Schema = mongoose.Schema;
    ObjectId = Schema.ObjectId;
// Review Schema
var reviewSchema = mongoose.Schema({
	review:{
		type: String,
		required: true
  }
	});

const Review = module.exports = mongoose.model('Review', reviewSchema);
