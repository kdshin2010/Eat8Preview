var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var IconSchema = new mongoose.Schema({
	icon_number: Number,
	icoId: String,
	left: Number,
	top: Number
});


mongoose.model('Icon', IconSchema);
