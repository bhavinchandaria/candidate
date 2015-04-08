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

    /*beforeEach(inject(function() {
        var $injector = angular.injector(['candidate']);
        getBranchNameFromId = function() {
            return $injector.get('getBranchNameFromId');
        };
    }));*/

    it('should be defined', function() {
      var service = createServiceCourse();
      expect(service).toBeTruthy();
    });

    it('should be defined', function() {
      var service = createServiceCandidates();
      expect(service).toBeTruthy();
    });

    it('initial length of Candidate',function(){
        var service = createServiceCandidates();
        expect(service.candidatelist).toBeUndefined();

    });
    
    it('initial length of Courses',function(){
        var service = createServiceCourse();
        expect(service.cmpcourse.length).toEqual(6);
    });

     it('Checks for Branch Id and Value Mapping',function(){
        var service = createServiceCourse();
        expect(service.brdata[0].id === 'b1' && service.brdata[0].value === 'B.Sc').toEqual(true);
    });
     it('Checks for Branch Id and Value Mapping',function(){
        var service = createServiceCourse();
        expect(service.brdata[1].id === 'b2' && service.brdata[1].value === 'M.E').toEqual(true);
    });
     it('Checks for Branch Id and Value Mapping',function(){
        var service = createServiceCourse();
        expect(service.brdata[2].id === 'b3' && service.brdata[2].value === 'M.C.A').toEqual(true);
    });
     it('Checks for Branch Id and Value Mapping',function(){
        var service = createServiceCourse();
        expect(service.brdata[3].id === 'b4' && service.brdata[3].value === 'BCA').toEqual(true);
    });
     it('Checks for Branch Id and Value Mapping',function(){
        var service = createServiceCourse();
        expect(service.brdata[4].id === 'b5' && service.brdata[4].value === 'B.E').toEqual(true);
    });
     it('Checks for Branch Id and Value Mapping',function(){
        var service = createServiceCourse();
        expect(service.brdata[5].id === 'b6' && service.brdata[5].value === 'M.Sc').toEqual(true);
    });

    it('Checks for Degree Id and Value Mapping',function(){
        var service = createServiceCourse();
        expect(service.csdata[0].id === 'c1' && service.csdata[0].value === 'Information Technology').toEqual(true);
    });
     it('Checks for Degree Id and Value Mapping',function(){
        var service = createServiceCourse();
        expect(service.csdata[1].id === 'c2' && service.csdata[1].value === 'Mechanical Engineer').toEqual(true);
    });
     it('Checks for Degree Id and Value Mapping',function(){
        var service = createServiceCourse();
        expect(service.csdata[2].id === 'c3' && service.csdata[2].value === 'Electronics Engineer').toEqual(true);
    });
     it('Checks for Degree Id and Value Mapping',function(){
        var service = createServiceCourse();
        expect(service.csdata[3].id === 'c4' && service.csdata[3].value === 'Computer Application').toEqual(true);
    });
     it('Checks for Degree Id and Value Mapping',function(){
        var service = createServiceCourse();
        expect(service.csdata[4].id === 'c5' && service.csdata[4].value === 'Computer Science').toEqual(true);
    });
     it('Checks for Degree Id and Value Mapping',function(){
        var service = createServiceCourse();
        expect(service.csdata[5].id === 'c6' && service.csdata[5].value === 'Cyber Science').toEqual(true);
    });
    it('Checks for Degree Id and Value Mapping',function(){
        var service = createServiceCourse();
        expect(service.csdata[6].id === 'c7' && service.csdata[6].value === 'BioInformatics').toEqual(true);
    });

    it('Checks for Degree and Branch Id and Value Mapping',function(){
        var service = createServiceCourse();
        var course = createServiceCourse();
        expect(service.cmpcourse[0].DegreeId === course.brdata[0].id).toEqual(true);
    });
    
});

