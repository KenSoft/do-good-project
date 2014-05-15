'use strict';

angular.module('firstNgAppApp')
  .controller('LoginCtrl', function ($scope,Contacts,$rootScope) {
		$scope.add = function(input){
		Contacts.login(input,function(data){
			console.log(data);
			

		});
	};
  });
