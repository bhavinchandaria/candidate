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
    .module('login', [
      'ui.router'
    ])
    .config(config)
    .factory('dataStore', function dataStore() {
      return {
        lgdata: 
          [{
            'username': 'test',
            'password': 'test'
          }]
        };
    })
    .factory('login',function (){
      var userlist =[];
      return{
      getalluser : function (){
        return userlist;
      },
      setalluser : function (list) {
        userlist=list;
      }
    };
    })
    .controller('loginCtrl', ['$scope','$location','$rootScope','login', function ($scope, $location, $rootScope,login) {
      $rootScope.user=[{'fname':'Bhavin','lname':'Chandaria','uname' : 'test','pass' : 'test'}];

      /*console.log($rootScope.user);*/
      /*$rootScope.user.push({'fname':localStorage.getItem('fname'),'lname':localStorage.getItem('lname'),'uname' : localStorage.getItem('uname'),'pass' : localStorage.getItem('pass')});*/
      $scope.validate = function () {
        /*var vm= this;
        var user= [];
        vm.user.push($rootScope.user);
        vm.user.push(login.getalluser)*/
        if(login.getalluser().length>0){
          $rootScope.user=login.getalluser();
          //console.log($rootScope.user);
        }
        /*alert('validate');*/
        for(var i=0;i<$rootScope.user.length;i++){
        if ($scope.uname === $rootScope.user[i].uname && $scope.pass === $rootScope.user[i].pass) {
          $rootScope.login = true;
          $rootScope.uname = $rootScope.user[i].uname;
          $location.path('/UNI/welcome');
        }
      }
      };
      $scope.logout = function () {
        $rootScope.login=false;
        /*localStorage.removeItem('fname');
        localStorage.removeItem('lname');
        localStorage.removeItem('uname');
        localStorage.removeItem('pass');
        */
        location.reload();
        $location.path('#/');


      };
    }]);

    
  function config($urlRouterProvider,$stateProvider) {
    $urlRouterProvider.otherwise('/UNI/login');
    /*console.log($stateProvider);*/
    $stateProvider
    .state('UNI.login', {
      url: '/login',
      views: {
        '@': {
          templateUrl: 'login/login.tpl.html',
          controller: 'loginCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('UNI.success', {
      url: '/welcome',
      views: {
        '@': {
          templateUrl: 'welcome/welcome.tpl.html',
          controller: 'loginCtrl'
        }
      }
    });
  }

})();
