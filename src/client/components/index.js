'use strict';

const angular = require('angular');

angular.module('iwaChallenge').component('dashboard', require('./dashboard'));
angular.module('iwaChallenge').directive('detail', require('./detailView'));
