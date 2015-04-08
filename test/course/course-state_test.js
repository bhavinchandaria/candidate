/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('UNI.course', function() {

  var $rootScope, $state, $injector, state = 'UNI.course';
 
  beforeEach(module('myNewApp'));
  beforeEach(module('course'));

  beforeEach(function() {

    inject(function(_$rootScope_, _$state_, _$injector_) {

      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
    });
  });
  
  it('should respond to URL', function() {
    expect($state.href(state)).toEqual('#/UNI/course');
  });
});

describe('UNI.course.addCourse', function() {

  var $rootScope, $state, $injector, state = 'UNI.course.addCourse';
 
  beforeEach(module('myNewApp'));
  beforeEach(module('course'));

  beforeEach(function() {

    inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {

      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
      // We need add the template entry into the templateCache if we ever
      // specify a templateUrl
      $templateCache.put('addCourse.tpl.html', '');
    });
  });
  
  it('should respond to URL', function() {
    expect($state.href(state)).toEqual('#/UNI/course/addcourses');
  });
});

describe('UNI.course.viewCourse', function() {

  var $rootScope, $state, $injector, state = 'UNI.course.viewCourse';
 
  beforeEach(module('myNewApp'));
  beforeEach(module('course'));

  beforeEach(function() {

    inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {

      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
      // We need add the template entry into the templateCache if we ever
      // specify a templateUrl
      $templateCache.put('viewCourse.tpl.html', '');
    });
  });
  
  it('should respond to URL', function() {
    expect($state.href(state)).toEqual('#/UNI/course/viewCourse');
  });
});
