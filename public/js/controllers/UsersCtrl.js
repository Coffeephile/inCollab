angular.module('UsersCtrl', []).controller('UsersController', function($scope) {

	$scope.tagline = 'Wybierz użytkowanika do kontaktu:';	

	$scope.currentUsersList = [
		{firstname: "Dariusz", lastname: "Kwiatkowski", position: "Programista" }, 
		{firstname: "Marian", lastname: "Teściński", position: "Metalurg" }, 
		{firstname: "Hieronim", lastname: "Bojczy", position: "Inżynier produkcji" },
		{firstname: "Tadeusz", lastname: "Nowak", position: "Specjalista CAD" }
	];

	$scope.currentProjectsList = [{name: "Stalowy Kubek", ident: "sk01"}];

});