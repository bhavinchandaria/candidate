(function () {
  'use strict';

  /* @ngdoc object
   * @name home
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('home', [
      'ui.router'
    ]);

  angular
    .module('home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('UNI.home', {
        url: '/home',
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      });
  }

})();
