/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('UNI.register', function() {

  var $rootScope, $state, $injector, state = 'UNI.register';
 
  beforeEach(module('myNewApp'));
  beforeEach(module('register'));

  beforeEach(function() {

    inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {

      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
      // We need add the template entry into the templateCache if we ever
      // specify a templateUrl
      $templateCache.put('register.tpl.html', '');
    });
  });
  
  it('should respond to URL', function() {
    expect($state.href(state)).toEqual('#/UNI/register');
  });
});
