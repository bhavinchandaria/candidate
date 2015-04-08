/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('UNI.candidate', function() {

  var $rootScope, $state, $injector, state = 'UNI.candidate';
 
  beforeEach(module('myNewApp'));
  beforeEach(module('candidate'));

  beforeEach(function() {

    inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {

      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
      // We need add the template entry into the templateCache if we ever
      // specify a templateUrl
      $templateCache.put('candidates.tpl.html', '');
    });
  });
  
  it('should respond to URL', function() {
    expect($state.href(state)).toEqual('#/UNI/candidate');
  });
});

describe('UNI.viewcandidate', function() {

  var $rootScope, $state, $injector, state = 'UNI.viewcandidate';
 
  beforeEach(module('myNewApp'));
  beforeEach(module('candidate'));

  beforeEach(function() {

    inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {

      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
      // We need add the template entry into the templateCache if we ever
      // specify a templateUrl
      $templateCache.put('viewcandidates.tpl.html', '');
    });
  });
  
  it('should respond to URL', function() {
    expect($state.href(state)).toEqual('#/UNI/viewcandidate');
  });
});
