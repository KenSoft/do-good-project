'use strict';

angular.module('firstNgAppApp')
.controller('AddprojectCtrl', function ($scope,Contacts,$rootScope) {
	if($rootScope.sessionId!=null){
		$scope.view = 'login';
	}
	$scope.add = function(input){
		console.log(input);
		Contacts.addProject(input,$rootScope.username,function(data){
			console.log(data);
			window.location=/#/;


		});
	};
});
