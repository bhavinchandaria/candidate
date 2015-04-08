/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('UNI.login', function() {

  var $rootScope, $state, $injector, state = 'UNI.login';
 
  beforeEach(module('myNewApp'));
  beforeEach(module('login'));

  beforeEach(function() {

    inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {

      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
      // We need add the template entry into the templateCache if we ever
      // specify a templateUrl
      $templateCache.put('login.tpl.html', '');
    });
  });
  
  it('should respond to URL', function() {
    expect($state.href(state)).toEqual('#/UNI/login');
  });
});

describe('UNI.success', function() {

  var $rootScope, $state, $injector, state = 'UNI.success';
 
  beforeEach(module('myNewApp'));
  beforeEach(module('login'));

  beforeEach(function() {

    inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {

      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
      // We need add the template entry into the templateCache if we ever
      // specify a templateUrl
      $templateCache.put('welcome.tpl.html', '');
    });
  });
  
  it('should respond to URL', function() {
    expect($state.href(state)).toEqual('#/UNI/welcome');
  });
});