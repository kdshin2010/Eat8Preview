var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Mailjet = '' // require('node-mailjet').connect('**', '**'); connect to api key

var authentications = {}
var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
// var sendEmail = Mailjet.post('send');

authentications.sendWelcomeEmail = function(req, res) {
	var emailData = {
	    'FromEmail': 'kdshin2010@gmail.com',
	    'FromName': 'Kyle',
	    'Subject': 'Hey thanks for signing up for Eat 8 ',
	    'Text-part': 'Hey thanks for signing up for ea8',
	    'Recipients': [{'Email': req.body.username}]
	}
}


authentications.register = function(req, res) {
	var user = new User();
	user.username = req.body.username;
	user.setPassword(req.body.password);

	user.save(function(err) {
		var token;
		if(err) {
			console.log(err)
		} else {
			token = user.generateJwt();
			res.status(200);
			console.log('succesfully registered user!')
			res.json({
				"token": token
			})
		}
	});
}
authentications.login = function(req, res) {
	passport.authenticate('local', function(err, user, info) {
		var token;
		if(err) {
			res.json(404).json(err);
			return;
		}
		console.log('skipped the error part!')
		if (user) {
			token = user.generateJwt();
			res.status(200);
			res.json({
				"token": token
			});
		} else {
			res.status(401).json(info);
		}
	})(req, res)
}

module.exports = authentications