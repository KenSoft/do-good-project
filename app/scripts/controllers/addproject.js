'use strict';

angular.module('firstNgAppApp')
.controller('AddprojectCtrl', function ($scope,contacts) {
	contacts.$bind($scope, 'contacts');

	//$scope.contacts = contacts;

	$scope.add = function(input){
		$scope.contacts.$add({
			name:input.name,
			tel: input.tel,
			email:input.email,
			bird:input.bird,
			status:1
		});

		console.log($scope.contacts);
	};

	$scope.delete = function(contact){
		contact.status = 0;
	};
});
