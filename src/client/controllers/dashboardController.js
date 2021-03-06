'use strict';

function dashboardCtrl($scope, services) {
  $scope.program_blueprints = [];
  $scope.goals = [];
  $scope.detailed = false;
  $scope.selectedProgram = null;

  $scope.fetchPrograms = function() {
    services.getProgram(function(res) {
      $scope.program_blueprints = res.data.program_blueprints;
      $scope.program_blueprints.sort(function(a, b) {
        return a.display_order - b.display_order;
      });
    });
    $scope.fetchGoals();
  };

  $scope.fetchGoals = function() {
    services.getGoals(function(res) {
      $scope.goals = res.data.goals;
    });
  };

  // Go to detail view
  $scope.showDetail = function(program) {
    $scope.detailed = !$scope.detailed;
    $scope.selectedProgram = program;
  };
}

module.exports = dashboardCtrl;
