/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('UNI', function() {

  var $rootScope, $state, $injector, state = 'UNI';
 
  beforeEach(module('myNewApp'));

  beforeEach(function() {

    inject(function(_$rootScope_, _$state_, _$injector_) {

      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
    
    });
  });
  
  it('should respond to URL', function() {
    expect($state.href(state)).toEqual('#/UNI');
  });
});
