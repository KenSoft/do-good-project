'use strict';

angular.module('firstNgAppApp')
.factory('Contacts', ['$http', function($http) {
	var appId	= 'awsRoC0mgoBokhrwDEd7O9tHJoY9fpDTjDoMWYIQ';
	var apiKey	= 'u0lb7443cosZ7GNjtBnVNAKfCg7GCiAVjlNXgG2S';

	return {
		addProject : function(data,callback){
	//		console.log(q);
			$http({

				method: 'POST',
				url:'https://api.parse.com/1/classes/project',
				headers:
				{
					'X-Parse-Application-Id': appId,
					'X-Parse-REST-API-Key': apiKey,
					'Content-Type': 'application/json'
				},
				data: {
					projectName:data.projectName,
					where:data.where,
					detail:data.detail,
					when:{'__type': 'Date',
					'iso': data.when}
				}
			})
			.success(function(data) {
				console.log(data);
				callback(data);
			});
		},
		getAll : function(callback){
			console.log('GetAll');
			$http({
				method: 'GET',
				url:'https://api.parse.com/1/classes/project',
				headers:
				{
					'X-Parse-Application-Id': appId,
					'X-Parse-REST-API-Key': apiKey,
					'Content-Type': 'application/json'
				}
			})
			.success(function(data) {
				console.log(data);
				console.log('success');
				callback(data);
			})
			.error(function(data){
				console.log('error'+data);
			});
		}
	};
}]);
