(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name courseCtrl
   *
   * @description
   *
   */
  angular
    .module('course')
    .controller('courseCtrl', courseCtrl);

  function courseCtrl($rootScope,list) { 
    var vm = this;
    /*vm.list = ['BioInformatics','Cyber Science','Computer Science','Computer Application', 'Information Technology', 'Mechanical Engineer' , 'Electronics Engineer'];*/
    vm.course = [];
    /*vm.course=[{'Degree':'MCA','Course':['Computer Application']}];*/
    init();
    function init () {
      if(list.getallcourse()){
            vm.course=list.getallcourse();
            console.log(vm.course);
      }
    }
    vm.AddCourse=AddCourse;
    function AddCourse(degName,degCourse){
      vm.course.push({'Degree' : degName,'Course' : degCourse});
      console.log(vm.course);
      list.setallcourse(vm.course);
    }
  }

})();
