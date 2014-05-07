angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'views/login.html',
			controller: 'MainController'
		})
		
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'MainController'
		})
		
		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'MainController'
		})

		.when('/projects', {
			templateUrl: 'views/projects.html',
			controller: 'ProjectsController'
		})

		.when('/users', {
			templateUrl: 'views/users.html',
			controller: 'UsersController'	
		})

		.when('/properties', {
			templateUrl: 'views/properties.html',
			controller: 'ProjectsController'	
		})
		
		.when('/stats', {
			templateUrl: 'views/stats.html',
			controller: 'StatsController'
		})
		
		.when('/calendar', {
			templateUrl: 'views/calendar.html',
			controller: 'CalendarController'
		});

	$locationProvider.html5Mode(true);

}]);