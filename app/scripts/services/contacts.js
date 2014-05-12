/* global Firebase */
'use strict';

angular.module('firstNgAppApp')
.factory('contacts', ['$firebase', function($firebase) {
    var ref = new Firebase('https://do-good-project.firebaseio.com/contacts');
    return $firebase(ref);
}]);
