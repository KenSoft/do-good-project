'use strict';

angular.module('firstNgAppApp')
.controller('AddprojectCtrl', function ($scope,Contacts) {

	$scope.add = function(input){
		console.log(input);
		Contacts.addProject(input,function(data){
			console.log(data);
			

		});
	};
});
