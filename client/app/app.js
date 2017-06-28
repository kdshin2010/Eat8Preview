(function() {
	'use strict';
	angular
		.module('menuApp', 
			['ngRoute',
			'ui.bootstrap'
			])
		.config(ConfigFunction)

	function ConfigFunction($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '../landing_page/home.html',
			access: {restricted: false}
		})
		$routeProvider.when('/dashboard', {
			templateUrl: '../dashboard/dashboard.html',
			controller: 'DashboardController',
			controllerAs: 'dc',
			access: {restricted: false}
		})
		$routeProvider.when('/menu', {
			templateUrl:'../menu/menu.html',
			conroller: 'MenuController',
			controllerAs: 'mc',
			access: {restricted: false}
		})
	}

})();