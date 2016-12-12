var express = require('express'),
	routes = express.Router(),
	passport = require('passport'),
	jwt = require('express-jwt'),
	auth = jwt({
		secret: 'MY_SECRET',
		userProperty: 'payload'
	}),
	users = require('../controllers/users.js'),
	authentications = require('../controllers/authentications.js'),
	icons = require('../controllers/icons.js'),
	menus = require('../controllers/menus.js'),
	orders = require('../controllers/orders.js'),

	waitlists = require('../controllers/waitlists.js'),
	User = require('../models/User.js');

module.exports = routes;

