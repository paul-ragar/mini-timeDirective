angular.module('timeApp').directive('showTime', function($interval) {

  return {
    restrict: 'E',
    template: '<div>The current time is {{time}} </div>',
    link: function(scope, element, attrs) {
      $interval(function() {
      var currentTime = new Date();
      scope.time = currentTime.toString();
    }, 1000)
    }

  }

});
