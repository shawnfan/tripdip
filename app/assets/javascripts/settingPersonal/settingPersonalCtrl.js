"use strict"
angular.module('angularApp')
.controller('SettingPersonalCtrl', [
'$scope',
function($scope){
	$scope.personImg = [
		"https://s3.amazonaws.com/tripdip/v2/p_animal.jpg",
		"https://s3.amazonaws.com/tripdip/v2/p_arty.jpg",
		"https://s3.amazonaws.com/tripdip/v2/p_clubbing.jpg",
		"https://s3.amazonaws.com/tripdip/v2/p_eatOut.jpg",
		"https://s3.amazonaws.com/tripdip/v2/p_museum.jpg",
		"https://s3.amazonaws.com/tripdip/v2/p_outdoor.jpg",
		"https://s3.amazonaws.com/tripdip/v2/p_relaxing.jpg",
		"https://s3.amazonaws.com/tripdip/v2/p_social.jpg"
	];

}]);
