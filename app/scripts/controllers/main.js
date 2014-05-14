'use strict';

angular.module('firstNgAppApp')
.controller('MainCtrl', function ($scope,Contacts) {
	Contacts.getAll(function(data){
		console.log(data);
		$scope.contacts=data.results;
		console.log($scope.contacts);
	});
});
