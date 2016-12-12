var mongoose = require('mongoose'),
	Waitlist = mongoose.model('Waitlist'),
	twilioConfig = require('../config/twilio.config.js'),
	twilioClient = require('twilio')(twilioConfig.accountSid, twilioConfig.authToken);

	waitlists = {};

module.exports = waitlists;
