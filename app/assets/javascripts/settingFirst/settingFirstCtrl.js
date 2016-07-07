"use strict"
angular.module('angularApp')
.controller('SettingFirstCtrl', [
'$scope',
function($scope){
	$scope.vacationType = [
		{
			"title": "Business",
			"img": 	"https://s3.amazonaws.com/tripdip/v2/business.png"
		},
		{
			"title": "Friends",
			"img": 	"https://s3.amazonaws.com/tripdip/v2/friends.png"
		},
		{
			"title": "Family",
			"img": 	"https://s3.amazonaws.com/tripdip/v2/family.png"
		},
		{
			"title": "Bag Packer",
			"img": 	"https://s3.amazonaws.com/tripdip/v2/bagpacker.png"
		}
	];

	$scope.budget = [
		{
			"title": "Economy",
			"img": 	"https://s3.amazonaws.com/tripdip/v2/economy.png"
		},
		{
			"title": "Moderate",
			"img": 	"https://s3.amazonaws.com/tripdip/v2/moderate.png"
		},
		{
			"title": "Expensive",
			"img": 	"https://s3.amazonaws.com/tripdip/v2/expensive.png"
		}
	];

	$scope.map = "https://s3.amazonaws.com/tripdip/GoogleMap.png";

	$scope.updateMap = function() {
		//Based on variable, update maps
	};
}]);
