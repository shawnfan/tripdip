"use strict"
angular.module('angularApp')
.controller('SettingPersonalCtrl', [
'$scope','$mdDialog',
function($scope, $mdDialog){
	$scope.personalityImg = [
		{
			"img": "https://s3.amazonaws.com/tripdip/v2/p_animals.jpg",
			"title": "Animals"
		},
		{
			"img": "https://s3.amazonaws.com/tripdip/v2/p_arty.jpg",
			"title": "Arty"
		},
		{
			"img": "https://s3.amazonaws.com/tripdip/v2/p_clubbing.jpg",
			"title": "Clubbing"
		},
		{
			"img": "https://s3.amazonaws.com/tripdip/v2/p_eatOut.jpg",
			"title": "Eat Out"
		},
		{
			"img": "https://s3.amazonaws.com/tripdip/v2/p_museum.jpg",
			"title": "Museum"
		},
		{
			"img": "https://s3.amazonaws.com/tripdip/v2/p_outdoor.jpg",
			"title": "Outdoor"
		},
		{
			"img": "https://s3.amazonaws.com/tripdip/v2/p_relaxing.jpg",
			"title": "Realaxing"
		},
		{
			"img": "https://s3.amazonaws.com/tripdip/v2/p_social.jpg",
			"title": "Social"
		}	
	];

	$scope.confirm = function() {
		alert("You have successfully submitted your personality quiz to your profile!");
	};

	$scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('You have successfully submitted your personality quiz to your profile!')
          .targetEvent(ev)
          .ok('OK')
    $mdDialog.show(confirm).then(function() {
      $scope.status = 'ok';
    }, function() {
      $scope.status = 'cancel';
    });
  };


}]);
