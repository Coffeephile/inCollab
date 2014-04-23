angular.module('UsersCtrl', []).controller('UsersController', function($http, $scope) {

	$scope.tagline = 'Wybierz użytkowanika do kontaktu:';	

	$scope.currentUsersList = [];

	$http.get('/api/users')
                .success(function(data) {
                        $scope.currentUsersList = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });

	$scope.currentProjectsList = [];

	$http.get('/api/projects')
                .success(function(data) {
                        $scope.currentProjectsList = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });

        $scope.AddUserToProject = function(user){

                $http.post('/api/users', user)
                .success(function() {
                        console.log('Success')
                })
                .error(function() {
                        console.log('Error');
                });;   
        }

});