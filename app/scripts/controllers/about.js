'use strict';

angular.module('firstNgAppApp')
.controller('AboutCtrl', function ($scope,$rootScope) {
		if($rootScope.sessionId!=null){
		$scope.view = 'login';
	}
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
});
