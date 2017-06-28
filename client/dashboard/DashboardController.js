(function() {
	'use strict';

	angular
		.module('menuApp')
		.controller('DashboardController', DashboardController);


		DashboardController.$inject = ['$scope', '$location']

		function DashboardController($scope, $location) {
			var vm = this;

			vm.goToMenu = goToMenu;

			function goToMenu() {
				$location.path('/menu')
			}


		}


})();