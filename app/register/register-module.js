(function () {
  'use strict';

  /* @ngdoc object
   * @name login
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('register', [
      'ui.router'
    ])
    .config(config);
  function config($stateProvider) {
    $stateProvider
    .state('UNI.register', {
      url: '/register',
      views: {
        '@': {
          templateUrl: 'register/register.tpl.html',
          controller: 'registerCtrl',
          controllerAs: 'vm'
        }
      }
    });
  }

})();
