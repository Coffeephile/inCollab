angular.module('ProjectsCtrl', []).controller('ProjectsController', function($http, $scope) {

	$scope.tagline = 'Wybierz projekt nad którym chcesz pracować:';

	$scope.projectInfo = null;
	$scope.usersNumber = 0;

	$http.get('/api/projects')
                .success(function(data) {
                        $scope.projectInfo = data[0];
                        $scope.usersNumber = data[0].userslist.length;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
});