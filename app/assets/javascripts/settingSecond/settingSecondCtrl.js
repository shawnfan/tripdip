"use strict"
angular.module('angularApp')
.controller('SettingSecondCtrl', [
'$scope',
function($scope){
	$scope.map = "https://s3.amazonaws.com/tripdip/v2/route0.jpg";
	$scope.mainColor = "#F38181";
	$scope.days = [
		"  Monday (8/1)    ",
		"  Tuesday (8/2)   ",
		"  Wednesday (8/3) ",
		"  Thursday (8/4)  ",
		"  Friday (8/5)    "
	];
	$scope.result = [
		{"time": "8:45am-9:45am",		"icon": "https://s3.amazonaws.com/tripdip/v2/icon_hotel.png", 	"loc":"Four Seasons Hotel"},
		{"time": "10:45am-11:45am",		"icon": "https://s3.amazonaws.com/tripdip/v2/icon_restaurant.png", 	"loc":"Sam's Café (Breakfast)"},
		{"time": "12:30pm-2:30pm",		"icon": "https://s3.amazonaws.com/tripdip/v2/icon_zoo.png", 	"loc":"Hangzhou Zoo"},
		{"time": "3:00pm-5:00pm",		"icon": "https://s3.amazonaws.com/tripdip/v2/icon_museum.png", 	"loc":"Zhejiang Tea Museum"},
		{"time": "5:45pm-7:45pm",		"icon": "https://s3.amazonaws.com/tripdip/v2/icon_restaurant.png", 	"loc":"Shan Wai Shan Restaurant"},
		{"time": "9:30pm-10:30pm",		"icon": "https://s3.amazonaws.com/tripdip/v2/icon_bar.png", 	"loc":"Black Swan Bar"}
	];

	$scope.routes = [
		"https://s3.amazonaws.com/tripdip/v2/route0.jpg",
		"https://s3.amazonaws.com/tripdip/v2/route1.jpg",
		"https://s3.amazonaws.com/tripdip/v2/route2.jpg",
		"https://s3.amazonaws.com/tripdip/v2/route3.jpg",
		"https://s3.amazonaws.com/tripdip/v2/route4.jpg"
	];

	$scope.updateMap = function() {
		var count = 0;
		if ($scope.history > 100) {
			count++;
		}
		if ($scope.music > 100) {
			count++;
		}
		if ($scope.morden > 100) {
			count++;
		}
		if ($scope.culture > 100) {
			count++;
		}
		if ($scope.cuisine > 100) {
			count++;
		}
		if ($scope.entertainment > 100) {
			count++;
		}
		if ($scope.nature > 100) {
			count++;
		}
		if ($scope.shoping > 100) {
			count++;
		}

		if (count >= 4) {
			count = 4;
		}
		$scope.map = $scope.routes[count];
		console.log($scope.map);
	};
}]);
