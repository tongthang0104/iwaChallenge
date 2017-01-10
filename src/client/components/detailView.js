'use strict';

const detailViewComponent =  function() {
  return {
    templateUrl: 'client/templates/detailView.html',
    replace: true,
    controller: 'detailViewCtrl',
    scope: {
      info: '=',
      goals: '='
    }
  };
};

module.exports = detailViewComponent;
