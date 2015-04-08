(function () {
  'use strict';

  /* @ngdoc object
   * @name candidate
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('candidate', [
      'ui.router'
    ])
    .config(config)
    .factory('candidate',function (){
      var candidatelist =[];
      return{
      getallcandidate : function (){
        return candidatelist;
      },
      setallcandidate : function (list) {
        candidatelist=list;
      }
    };
    });
  function config($stateProvider) {
    $stateProvider
    .state('UNI.candidate', {
      url: '/candidate',
      views: {
        '@': {
          templateUrl: 'candidates/candidates.tpl.html',
          controller: 'candidateCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('UNI.viewcandidate', {
      url: '/viewcandidate',
      views: {
        '@': {
          templateUrl: 'candidates/viewcandidates.tpl.html',
          controller: 'candidateCtrl',
          controllerAs: 'vm'
        }
      }
    });
  }

})();
