"use strict"
angular.module('angularApp')
.controller('TripCtrl', [
'$scope',
function($scope){
	$scope.photo = "https://s3.amazonaws.com/tripdip/DinnerWithFriend.jpg";
	$scope.mapPic = "https://s3.amazonaws.com/tripdip/GoogleMap.png";
	$scope.yelpPic = "https://s3.amazonaws.com/tripdip/yelppic.jpg";

	$scope.clicked = false;
	$scope.click = function() {
		$scope.clicked = true;
	};
}]);
