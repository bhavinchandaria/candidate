/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('loginCtrl', function() {
  beforeEach(module('login'));
  // beforeEach(module('course'));

  var $controller,createService,createServiceuserlist;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  beforeEach(inject(function() {
        var $injector = angular.injector(['login']);
        createService = function() {
            return $injector.get('dataStore');
        };
    }));

  beforeEach(inject(function() {
        var $injector = angular.injector(['login']);
        createServiceuserlist = function() {
            return $injector.get('login');
        };
    }));


  it('should be defined', function() {
      var service = createService();
      expect(service).toBeTruthy();
      
    });
  it('Should Get Username And password',function(){
    var service = createService();
    expect(service.lgdata[0].username).toEqual('test');
    expect(service.lgdata[0].password).toEqual('test');
  });

  it('initial length of UserList',function(){
        var service = createServiceuserlist();
        expect(service.userlist).toBeUndefined();
  });
});

