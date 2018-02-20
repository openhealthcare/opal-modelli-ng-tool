'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {
  $http.get('schema/examination-of-tooth.json')
       .then(function(res){
          $scope.schema = res.data;
        });
  $scope.testdata = "testdata";
  $scope.actions = {
    "create_issue": {
      "action_icon_class": "fab fa-github",
      "action_text": "Create GitHub Issue",
      "action_url": "#"
    },
    "edit": {
      "action_icon_class": "fas fa-edit",
      "action_text": "Edit on GitHub",
      "action_url": "#"
    }
  };
});
