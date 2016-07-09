"use strict"
angular.module('angularApp')
.controller('SettingSecondCtrl', [
'$scope',
function($scope){
	$scope.map = "https://s3.amazonaws.com/tripdip/GoogleMap.png";
	$scope.mainColor = "#F38181";

	$scope.result = [
		{"day": "Monday (8/1)",		"time": "8:45am-9:45am",		"icon": "https://s3.amazonaws.com/tripdip/v2/icon_hotel.png", 	"loc":"Four Seasons Hotel"},
		{"day": "Monday (8/1)",		"time": "10:45am-11:45am",		"icon": "https://s3.amazonaws.com/tripdip/v2/icon_restaurant.png", 	"loc":"Sam's Café (Breakfast)"},
		{"day": "Tuesday (8/2)",	"time": "12:30pm-2:30pm",		"icon": "https://s3.amazonaws.com/tripdip/v2/icon_zoo.png", 	"loc":"Hangzhou Zoo"},
		{"day": "Wednesday (8/3)",	"time": "3:00pm-5:00pm",		"icon": "https://s3.amazonaws.com/tripdip/v2/icon_museum.png", 	"loc":"Zhejiang Tea Museum"},
		{"day": "Thursday (8/4)",	"time": "5:45pm-7:45pm",		"icon": "https://s3.amazonaws.com/tripdip/v2/icon_restaurant.png", 	"loc":"Shan Wai Shan Restaurant (Dinner)"},
		{"day": "Friday (8/5)",		"time": "9:30pm-10:30pm",		"icon": "https://s3.amazonaws.com/tripdip/v2/icon_bar.png", 	"loc":"Black Swan Bar"}
	];
}]);
