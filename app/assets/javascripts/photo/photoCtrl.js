"use strict"
angular.module('angularApp')
.controller('PhotoCtrl', [
'$scope',
function($scope){
	$scope.photos = [
		"https://s3.amazonaws.com/tripdip/travel/_AK49787.JPG",
		"https://s3.amazonaws.com/tripdip/travel/_AK49802.JPG",
		"https://s3.amazonaws.com/tripdip/travel/_AK49803.JPG",
		"https://s3.amazonaws.com/tripdip/travel/_AK49823.JPG",
		"https://s3.amazonaws.com/tripdip/travel/_AK49837.JPG",
		"https://s3.amazonaws.com/tripdip/travel/_AK49850.JPG"
	];
}]);
