/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('courseCtrl', function() {

    beforeEach(module('course'));

    var ctrl,createService,createServicelist;

    beforeEach(inject(function($controller) {
        ctrl = $controller('courseCtrl');
    }));

    beforeEach(inject(function() {
        var $injector = angular.injector(['course']);
        createService = function() {
            return $injector.get('coursedata');
        };
    }));

    beforeEach(inject(function() {
        var $injector = angular.injector(['course']);
        
        createServicelist = function() {
            return $injector.get('list');
        };
    }));

    it('should be defined', function() {
      var service = createService();
      expect(service).toBeTruthy();
    });

    it('initial length of CourseList',function(){
        var service = createServicelist();
        expect(service.courselist).toBeUndefined();
    });
});
