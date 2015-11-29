"use strict"
angular.module('angularApp')
.controller('TripCtrl', [
'$scope',
function($scope){
	$scope.photo = "https://s3.amazonaws.com/tripdip/travel/_AK49850.JPG";
	$scope.mapPic = "https://s3.amazonaws.com/tripdip/GoogleMap.png";
}]);
