"use strict"
angular.module('angularApp', ['ui.router', 'templates', 'ngMaterial', 'ngMdIcons'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl:'home/_home.html',
			controller:'HomeCtrl'
		})
		.state('itinerary', {
			url: '/itinerary',
			templateUrl:'itinerary/_itinerary.html',
			controller:'ItineraryCtrl'
		})
		.state('photo', {
			url: '/photo',
			templateUrl:'photo/_photo.html',
			controller:'PhotoCtrl'
		})
		.state('trip', {
			url: '/trip',
			templateUrl:'trip/_trip.html',
			controller:'TripCtrl'
		})

	$urlRouterProvider.otherwise('home');
}])
