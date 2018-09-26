'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope) {
  $scope.schema = {}
  $scope.schema.title = "title";
  $scope.schema.description = "description";
  $scope.panel_actions = {
    "test": {
      "action_icon_class": "fa-check",
      "action_text": "action_text",
      "action_url": "#action_url"
    }
  }
});
