'use strict';

angular.module('firstNgAppApp')
  .controller('RegisterCtrl', function ($scope,Contacts,$rootScope) {
  	if($rootScope.sessionId!=null){
		$scope.view = 'login';
	}
	$scope.add = function(input){
		Contacts.register(input,function(data){
			console.log(data);
			window.location=/#/;

		});
	};
  });
