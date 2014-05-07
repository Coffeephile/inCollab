angular.module('ProjectsCtrl', []).controller('ProjectsController', function($http, $scope) {

	$scope.tagline = 'Wybierz projekt nad którym chcesz pracować:';

	$scope.projectInfo = null;
	$scope.usersNumber = 0;
    $scope.usersList = [];

    $scope.projectPhases = [
    {name: "Design", state: "W trakcie", 
    tasks: [{taskId: "A.1.1", taskStatus: "Zakończony", desc: "Brak opisu"}, {taskId: "A.1.2", taskStatus: "W trakcie", desc: "Brak opisu"}]},
    {name: "Rolling", state: "Nierozpoczeta", 
    tasks: [{taskId: "B.1.1", taskStatus: "Nierozpoczęta", desc: "Brak opisu"}, {taskId: "B.1.2", taskStatus: "Nierozpoczęta", desc: "Brak opisu"}]},
    {name: "Testing", state: "Nierozpoczeta", 
    tasks: [{taskId: "C.1.1", taskStatus: "Nierozpoczęta", desc: "Brak opisu"}, {taskId: "C.1.2", taskStatus: "Nierozpoczęta", desc: "Brak opisu"}]},
    {name: "Shipping", state: "Nierozpoczeta", 
    tasks: [{taskId: "D.1.1", taskStatus: "Nierozpoczęta", desc: "Brak opisu"}, {taskId: "D.1.2", taskStatus: "Nierozpoczęta", desc: "Brak opisu"}]}
    ];

    $scope.projectTasks = [{taskId: "A.1.2", taskStatus: "W trakcie", desc: "Brak opisu"},
    {taskId: "B.1.1", taskStatus: "Nierozpoczęta", desc: "Brak opisu"}, {taskId: "B.1.2", taskStatus: "Nierozpoczęta", desc: "Brak opisu"},
    {taskId: "C.1.1", taskStatus: "Nierozpoczęta", desc: "Brak opisu"}, {taskId: "C.1.2", taskStatus: "Nierozpoczęta", desc: "Brak opisu"},
    {taskId: "D.1.1", taskStatus: "Nierozpoczęta", desc: "Brak opisu"}, {taskId: "D.1.2", taskStatus: "Nierozpoczęta", desc: "Brak opisu"},
    ];

    $scope.projectNotes = [{type: "Dokument", name: "Badanie optymalnej wielkości kubka", link: "Brak"},
    {type: "Dokument", name: "Oferta stali z huty Katowice", link: "Brak"}];

        $scope.subscribeProject = function(){
                console.log("Nie jesteś zalogowany");
        };

        $scope.unsubscribeProject = function(){
                 console.log("Nie jesteś zalogowany");       
        };                      

        $scope.watchProject = function(){
                 console.log("Nie jesteś zalogowany");       
        };

        $scope.showProperties = function(){
                $rootScope.$apply(function() {

                        $location.path("/properties");
                });    
        };

	$http.get('/api/projects')
                .success(function(data) {
                        $scope.projectInfo = data[0];
                        $scope.usersNumber = data[0].userslist.length;
                        $scope.usersList = data[0].userslist;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
});