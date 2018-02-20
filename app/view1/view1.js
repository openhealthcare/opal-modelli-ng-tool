'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function ($scope) {

  $scope.testdata = "testdata";
  $scope.user = new Gh3.User("openhealthcare");
  $scope.repository = new Gh3.Repository("clinical-data-modelling-dummy-repo", $scope.user);
  $scope.repoTitle = "";
  $scope.branchTitle = "";
  $scope.branchContents = "";
  $scope.rawContent = "";

  $scope.repository.fetch(function (err, res) {
    if(err) { throw "error" }

    $scope.repository.fetchBranches(function (err, res) {
      if(err) { throw "error" }
      $scope.branch = $scope.repository.getBranchByName("master");
    });
  });
});
