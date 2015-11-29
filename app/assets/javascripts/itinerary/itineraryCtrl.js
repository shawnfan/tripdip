"use strict"
angular.module('angularApp')
.controller('ItineraryCtrl', [
'$scope',
function($scope){
	$scope.sectionPhotos = [
		"https://s3.amazonaws.com/tripdip/screen-shots/articles.png",
		"https://s3.amazonaws.com/tripdip/screen-shots/audio.png",
		"https://s3.amazonaws.com/tripdip/screen-shots/links.png",
		"https://s3.amazonaws.com/tripdip/screen-shots/photos.png",
		"https://s3.amazonaws.com/tripdip/screen-shots/quotes.png",
		"https://s3.amazonaws.com/tripdip/screen-shots/videos.png",
	];
}]);
