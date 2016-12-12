var mongoose = require('mongoose'),
	routes = require('../config/routes.js'),
	OrderTable = mongoose.model('OrderTable'),
	OrderItem = mongoose.model('OrderItem'),
	orders = {};


module.exports = orders;
