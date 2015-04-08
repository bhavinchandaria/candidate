(function () {
  'use strict';

  /* @ngdoc object
   * @name myNewApp
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('myNewApp', [
      'ngAria',
      'ui.router',
      'mgcrea.ngStrap',
      'home',
      'login',
      'candidate',
      'register',
      'course'
    ])
    .config(config);

  function config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/UNI/login');
    $stateProvider
    .state('UNI', {
      url: '/UNI',
      views: {
        'header@': {
          templateUrl: 'Header/header.tpl.html'
        },
        'sidebar@': {
          templateUrl: 'sidebar/sidebar.tpl.html'
        },
        'footer@': {
          templateUrl: 'footer/footer.tpl.html'
        }
      }
    });
  }

})();
