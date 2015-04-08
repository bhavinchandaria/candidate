(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name candidateCtrl
   *
   * @description
   *
   */
  angular
    .module('candidate')
    .controller('candidateCtrl', candidateCtrl);

  function candidateCtrl(candidate,list,coursedata) { 
    var vm = this;
    vm.lst=coursedata.brdata;
    vm.lst0=coursedata.csdata;
    vm.lst1=coursedata.cmpcourse;
    vm.getBranchNameFromId = getBranchNameFromId;
    vm.updateBranch=updateBranch;
    vm.updatelst=[];
    function getBranchNameFromId(branchId) {
        for(var i=0;i<vm.lst0.length;i++)
        {
          if (vm.lst0[i].id === branchId) 
                  {
                    return vm.lst0[i].value;
                  }
        }
    }
    function updateBranch(abc){
        vm.updatelst=[];
        angular.forEach(vm.lst1,function(value,index){
          if(abc.id === value.DegreeId)
          {
            angular.forEach(value.Branches,function(val, ind){
              // console.log(val);
              vm.updatelst.push(vm.getBranchNameFromId(val));
            });
          }
        });
        console.log(vm.updatelst);
    }

    vm.course = [];
    vm.candidate = [];
    init();
    function init () {
      if(candidate.getallcandidate()){
        /*vm.course=[{'Degree':'MCA','Course':['Computer Application','Computer Science']}];*/
        vm.candidate=candidate.getallcandidate();
        console.log(vm.candidate);
      }
      if(list.getallcourse()){
        vm.course=list.getallcourse();
        console.log(vm.course);
      }
    }
    vm.AddCandidate=AddCandidate;
    function AddCandidate(candidatename,candidateaddress,candidatedob,candidatedegree,candidatecourse){
      vm.candidate.push({'Name':candidatename,'Address':candidateaddress,'DOB':candidatedob,'Degree' : candidatedegree.Degree,'Course' : candidatecourse});
      console.log(vm.candidate);
      candidate.setallcandidate(vm.candidate);
    }
  }

})();
