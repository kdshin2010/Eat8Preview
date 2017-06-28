(function() {
	'use strict';

	angular
		.module('menuApp')
		.controller('MenuController', MenuController);


		MenuController.$inject = ['$scope', '$window']

		function MenuController($scope, $window) {
			var vm = this;
			vm.test = 'hello'



			function goToMenu() {
				$window.location('/menu')
			}


		}


})();