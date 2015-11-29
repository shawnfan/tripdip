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
	  "https://s3.amazonaws.com/tripdip/3a.+gristmill-waterfall-1-940x520.jpg",
	  "https://s3.amazonaws.com/tripdip/3.b+church-bedroom-940x520.jpg",
	  "https://s3.amazonaws.com/tripdip/3c.+image1-5.jpg"
  ];
}]);
