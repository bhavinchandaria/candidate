(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name registerCtrl
   *
   * @description
   *
   */
  angular
    .module('register')
    .controller('registerCtrl', registerCtrl);
  function registerCtrl($rootScope,login) { 
    var vm = this;
    vm.logincredentials=logincredentials;
    function logincredentials(firstName,lastName,username,password){
      /*localStorage.setItem('fname',firstName);
      localStorage.setItem('lname',lastName);
      localStorage.setItem('uname',username);
      localStorage.setItem('pass',password);
      */
      $rootScope.user.push({'fname':firstName,'lname':lastName,'uname' : username,'pass' : password});
      login.setalluser($rootScope.user);
      console.log($rootScope.user);
      alert('User added Successfully');
    }
  }
})();
