"use strict"
angular.module('angularApp')
.controller('SettingFirstCtrl', [
'$scope',
function($scope){
	$scope.vacationType = [
		{
			"title": "Business",
			"img": 	"https://s3.amazonaws.com/tripdip/v2/business.png",
			"img1": 	"https://s3.amazonaws.com/tripdip/v2/business.png",
			"img2": 	"https://s3.amazonaws.com/tripdip/v2/businessSelected.png"
		},
		{
			"title": "Friends",
			"img": 	"https://s3.amazonaws.com/tripdip/v2/friends.png",
			"img1": 	"https://s3.amazonaws.com/tripdip/v2/friends.png",
			"img2": 	"https://s3.amazonaws.com/tripdip/v2/friendsSelected.png"
		},
		{
			"title": "Family",
			"img": 	"https://s3.amazonaws.com/tripdip/v2/family.png",
			"img1": 	"https://s3.amazonaws.com/tripdip/v2/family.png",
			"img2": 	"https://s3.amazonaws.com/tripdip/v2/familySelected.png"
		},
		{
			"title": "Bag Packer",
			"img": 	"https://s3.amazonaws.com/tripdip/v2/bagpacker.png",
			"img1": 	"https://s3.amazonaws.com/tripdip/v2/bagpacker.png",
			"img2": 	"https://s3.amazonaws.com/tripdip/v2/bagpackerSelected.png"
		}
	];

	$scope.budget = [
		{
			"title": "Economy",
			"img": 	"https://s3.amazonaws.com/tripdip/v2/economy.png",
			"img1": 	"https://s3.amazonaws.com/tripdip/v2/economy.png",
			"img2": 	"https://s3.amazonaws.com/tripdip/v2/economySelected.png"
		},
		{
			"title": "Moderate",
			"img": 	"https://s3.amazonaws.com/tripdip/v2/moderate.png",
			"img1": 	"https://s3.amazonaws.com/tripdip/v2/moderate.png",
			"img2": 	"https://s3.amazonaws.com/tripdip/v2/moderateSelected.png"
		},
		{
			"title": "Expensive",
			"img": 	"https://s3.amazonaws.com/tripdip/v2/expensive.png",
			"img1": 	"https://s3.amazonaws.com/tripdip/v2/expensive.png",
			"img2": 	"https://s3.amazonaws.com/tripdip/v2/expensiveSelected.png"
		}
	];

	$scope.map = "https://s3.amazonaws.com/tripdip/GoogleMap.png";

	$scope.updateMap = function() {
		//Based on variable, update maps
	};

	$scope.updateVacationType = function(index) {
		for (var i = 0; i < $scope.vacationType.length; i++) {
			if (i == index) {
				$scope.vacationType[i].img = $scope.vacationType[i].img2;
			} else {
				$scope.vacationType[i].img = $scope.vacationType[i].img1;
			}
		}
	};
	$scope.updateBudgetType = function(index) {
		for (var i = 0; i < $scope.budget.length; i++) {
			if (i == index) {
				$scope.budget[i].img = $scope.budget[i].img2;
			} else {
				$scope.budget[i].img = $scope.budget[i].img1;
			}
		}
	};
}]);
