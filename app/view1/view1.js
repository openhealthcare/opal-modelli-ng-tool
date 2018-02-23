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

  // multiple row_actions can be defined here
  $scope.row_actions = {
    "create_issue": {
      "action_icon_class": "fab fa-github",
      "action_text": "Schema Feedback",
      "action_url": "https://github.com/openhealthcare/opal-modelli-ng-tool/issues/new?template=schema-feedback.md"
    }
  };
  // multiple panel_actions can be defined here
  $scope.panel_actions = {
    "edit": {
      "action_icon_class": "fas fa-edit",
      "action_text": "Edit Schema on GitHub",
      "action_url": "https://github.com/openhealthcare/opal-modelli-ng-tool/edit/master/app/schema/examination-of-tooth.json"
    }
  };
  $scope.data_type_detail = {
    "string": {
      "human_name": "text",
      "widget": "text",
      "widget_class": "form-control"
    },
    "boolean": {
     "human_name": "true/false",
     "widget": "checkbox",
     "widget_class": ""
    }
  };
});
