'use strict';

function services($http) {
  this.getProgram = function(cb) {
    $http.get('api/program_blueprints.json')
    .then(cb);
  };

  this.getGoals = function(cb) {
    $http.get('api/goals.json')
    .then(cb);
  };
}

module.exports = services;
