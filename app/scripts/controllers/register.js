'use strict';

angular.module('firstNgAppApp')
  .controller('RegisterCtrl', function ($scope,Contacts) {
	$scope.add = function(input){
		Contacts.register(input,function(data){
			console.log(data);
			

		});
	};
  });
