'use strict';

angular
.module('firstNgAppApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'ui.bootstrap',
	'firebase'
])
.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	})
	.when('/about', {
		templateUrl: 'views/about.html',
		controller: 'AboutCtrl'
	})
	.when('/addproject', {
	    templateUrl: 'views/addproject.html',
	    controller: 'AddprojectCtrl'
	})
	.when('/project-info/:projectId', {
		templateUrl: 'views/project-info.html',
		controller: 'ProjectInfoCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
});
