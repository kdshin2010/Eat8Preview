var mongoose = require('mongoose');
	MenuCategory = require('../models/MenuCategory.js'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var MenuItemSchema = new mongoose.Schema({
	_category: {type: ObjectId, ref: MenuCategory},
	name: String,
	price: Number,
	description: String,
	user: {type: ObjectId, ref: "User"}
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
