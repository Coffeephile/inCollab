angular.module('CalendarCtrl', ["ui.calendar"]).controller('CalendarController', function($scope) {

      $scope.name = "World";
      $scope.eventSources = [];
      $scope.next = next;
      $scope.previous = previous;
      $scope.error = "";
      
      var eventsSource = {};
      $scope.eventSources.push(eventsSource);
      
      function next(){
        try {
        $scope.calendar.fullCalendar('next');
        }
        catch (err) {
          $scope.error = err.message;
        }
      }
      
      function previous(){
        try {
        $scope.calendar.fullCalendar('prev');
        }
        catch (err) {
          $scope.error = err.message;
        }
      }
});