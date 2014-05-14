'use strict';

angular.module('firstNgAppApp')
.factory('Contacts', ['$http', function($http) {
	var appId	= 'syN64QMWju6KQhFZYxbgIvMNfMgKq2DkVb6cHYEi';
	var apiKey	= 'HEVdhYLuFSEWHC86GbMVQyPkWziTKGmgwJ2ioF9C';

	return {
		searchHot : function(q,callback){
			console.log(q);
			$http({
				params: {
					where: {barcode:q}
				},
				method: 'GET',
				url:'https://api.parse.com/1/classes/hotDeal',
				headers:
				{
					'X-Parse-Application-Id': appId,
					'X-Parse-REST-API-Key': apiKey,
					'Content-Type': 'application/json'
				}
			})
			.success(function(data) {
				console.log(data);
				callback(data);
			});
		},
		searchTel : function(q,callback){
			console.log(q);
			$http({
				params: {
					where: {barcode:q}
				},
				method: 'GET',
				url:'https://api.parse.com/1/classes/products',
				headers:
				{
					'X-Parse-Application-Id': appId,
					'X-Parse-REST-API-Key': apiKey,
					'Content-Type': 'application/json'
				}
			})
			.success(function(data) {
				console.log(data);
				callback(data);
			});
		},
		searchName : function(q,callback){
			console.log(q);
			$http({
				params: {
					where: {productName:q}
				},
				method: 'GET',
				url:'https://api.parse.com/1/classes/products',
				headers:
				{
					'X-Parse-Application-Id': appId,
					'X-Parse-REST-API-Key': apiKey,
					'Content-Type': 'application/json'
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
				url:'https://api.parse.com/1/classes/hotDeal',
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
