'use strict';

angular.module('firstNgAppApp')
.controller('MainCtrl', function ($scope,contacts) {

	contacts.$bind($scope, 'contacts');

	//$scope.contacts = contacts;

	$scope.add = function(input){
		$scope.contacts.$add({
			projectName:input.name,
			where: input.tel,
			detail:input.email,
			when:input.bird,
			status:1
		});

		console.log($scope.contacts);
	};

	$scope.delete = function(contact){
		contact.status = 0;
	};
});
