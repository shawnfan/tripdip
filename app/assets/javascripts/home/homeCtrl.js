"use strict"
angular.module('angularApp')
.controller('HomeCtrl', [
'$scope',
function($scope){
  $scope.test = "";
  $scope.numTravellers = ["1 traveller", "2 traveller", "3 traveller", "4 traveller"];
  $scope.numTraveller = "";
  $scope.interests = ["Casual", "Business", "Hipster", "Tourist"];

  $scope.photos = [
	"https://s3.amazonaws.com/tripdip/v2/trendingDestinationBeijin.jpg",
	"https://s3.amazonaws.com/tripdip/v2/trendingDestinationGuangzhou.jpg",
	"https://s3.amazonaws.com/tripdip/v2/trendingDestinationShanghai.jpg",
	"https://s3.amazonaws.com/tripdip/v2/trendingDestinationTaiwan.jpg",
	"https://s3.amazonaws.com/tripdip/v2/trendingDestinationYunnan.jpg"
  ];

	$scope.photosBiteOfChina = [
	"https://s3.amazonaws.com/tripdip/v2/biteOfChina1.jpg",
	"https://s3.amazonaws.com/tripdip/v2/biteOfChina2.jpg",
	"https://s3.amazonaws.com/tripdip/v2/biteOfChina3.jpg",
	"https://s3.amazonaws.com/tripdip/v2/biteOfChina4.jpg"
  ];

  	$scope.biteOfChinaVideoLink = "http://english.cntv.cn/special/a_bite_of_china/homepage/index.shtml";
}]);
