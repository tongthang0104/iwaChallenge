'use strict';

function detailViewCtrl($scope) {
  $scope.incentive_value = 0;
  $scope.currentGoals = [];
  $scope.incentive_value = 0;

  $scope.filterGoal = function(program) {
    const currentGoalGuid = program.goals.map(function(el) {
      return el.guid;
    });

    if (currentGoalGuid.length) {
      $scope.currentGoals = $scope.goals.filter(el => {
        return currentGoalGuid.includes(el.guid);
      });

      $scope.incentive_value = $scope.getTotalIncentiveValue($scope.currentGoals);
    }
  };

  $scope.getTotalIncentiveValue = function(goals) {
    return goals.reduce(function(sum, el) {
      return sum + el.incentive_value;
    }, 0);
  };
}

module.exports = detailViewCtrl;
