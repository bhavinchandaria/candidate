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
    it('To check getBranchNameFromId function',function(){
      var service= createServiceCourse();
      var branchId=service.csdata[0].id;
      expect(ctrl.getBranchNameFromId(branchId)).toEqual('Information Technology');
    });
    it('To check getBranchNameFromId function',function(){
      var service= createServiceCourse();
      var branchId=service.csdata[1].id;
      expect(ctrl.getBranchNameFromId(branchId)).toEqual('Mechanical Engineer');
    });
    it('To check getBranchNameFromId function',function(){
      var service= createServiceCourse();
      var branchId=service.csdata[2].id;
      expect(ctrl.getBranchNameFromId(branchId)).toEqual('Electronics Engineer');
    });
    it('To check getBranchNameFromId function',function(){
      var service= createServiceCourse();
      var branchId=service.csdata[3].id;
      expect(ctrl.getBranchNameFromId(branchId)).toEqual('Computer Application');
    });
    it('To check getBranchNameFromId function',function(){
      var service= createServiceCourse();
      var branchId=service.csdata[4].id;
      expect(ctrl.getBranchNameFromId(branchId)).toEqual('Computer Science');
    });
    it('To check getBranchNameFromId function',function(){
      var service= createServiceCourse();
      var branchId=service.csdata[5].id;
      expect(ctrl.getBranchNameFromId(branchId)).toEqual('Cyber Science');
    });
    it('To check getBranchNameFromId function',function(){
      var service= createServiceCourse();
      var branchId=service.csdata[6].id;
      expect(ctrl.getBranchNameFromId(branchId)).toEqual('BioInformatics');
    });
});