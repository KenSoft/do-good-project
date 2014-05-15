'use strict';

angular.module('firstNgAppApp')
.controller('ProjectInfoCtrl', function ($scope,$routeParams,Contacts) {
	console.log($routeParams.projectId);
	Contacts.getInfo($routeParams.projectId,function(data){
		console.log(data.results);
		$scope.detail=data.results[0];
		console.log($routeParams.projectId);
		Contacts.getAllComment($routeParams.projectId,function(data){
			console.log(data);
			$scope.comments=data.results;
			console.log($scope.comments);
		});
		$scope.getDate=function(object){
			var date=new Date(object.iso);
			console.log(date);
			return date.toDateString();
		};
		$scope.add = function(comment,project){
			console.log('working');
			Contacts.addComment(comment,project,function(data){
				console.log(data);
				window.location.reload();

			});
			
		};

	});
});