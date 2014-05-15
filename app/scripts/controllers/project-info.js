'use strict';

angular.module('firstNgAppApp')
.controller('ProjectInfoCtrl', function ($scope,$routeParams,Contacts) {
	console.log($routeParams.projectId);
	Contacts.getInfo($routeParams.projectId,function(data){
		console.log(data.results);
		$scope.detail=data.results[0];
	});
});
