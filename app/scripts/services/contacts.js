/* global Firebase */
'use strict';

angular.module('firstNgAppApp')
.factory('contacts', ['$firebase', function($firebase) {
    var ref = new Firebase('https://radiant-fire-5021.firebaseio.com/contacts');
    return $firebase(ref);
}]);
