/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('candidateCtrl', function() {

    beforeEach(module('course'));
    beforeEach(module('candidate'));

    var ctrl,createServiceCourse,createServiceCandidates;
    /*var getBranchNameFromId;*/

    beforeEach(inject(function($controller) {
        ctrl = $controller('candidateCtrl');
    }));

    beforeEach(inject(function() {
        var $injector = angular.injector(['course']);
        createServiceCourse = function() {
            return $injector.get('coursedata');
        };
    }));

    beforeEach(inject(function() {
        var $injector = angular.injector(['candidate']);
        createServiceCandidates = function() {
            return $injector.get('candidate');
        };
    }));

    it('To check updateBranch function',function(){
      var service= createServiceCourse();
      var abc=service.brdata[0];
      ctrl.updateBranch(abc);
      expect(ctrl.updatelst.length).toEqual(3);
    });
    it('To check updateBranch function',function(){
      var service= createServiceCourse();
      var abc=service.brdata[1];
      ctrl.updateBranch(abc);
      expect(ctrl.updatelst.length).toEqual(1);
    });
    it('To check updateBranch function',function(){
      var service= createServiceCourse();
      var abc=service.brdata[2];
      ctrl.updateBranch(abc);
      expect(ctrl.updatelst.length).toEqual(1);
    });
    it('To check updateBranch function',function(){
      var service= createServiceCourse();
      var abc=service.brdata[3];
      ctrl.updateBranch(abc);
      expect(ctrl.updatelst.length).toEqual(1);
    });
    it('To check updateBranch function',function(){
      var service= createServiceCourse();
      var abc=service.brdata[4];
      ctrl.updateBranch(abc);
      expect(ctrl.updatelst.length).toEqual(4);
    });
    it('To check updateBranch function',function(){
      var service= createServiceCourse();
      var abc=service.brdata[5];
      ctrl.updateBranch(abc);
      expect(ctrl.updatelst.length).toEqual(3);
    });
});