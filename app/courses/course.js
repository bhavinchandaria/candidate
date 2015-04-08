(function () {
  'use strict';

  /* @ngdoc object
   * @name course
   * @requires $stateProvider
   *
   * @description
   *
   */

  angular
    .module('course', [
      'ui.router'
    ])
    .config(config)
    .factory('list',function (){
      var courselist =[];
      return{
      getallcourse : function (){
        return courselist;
      },
      setallcourse : function (list) {
        courselist=list;
      }
    };
    })
    .factory('coursedata', function (){
        return {
            csdata: [{'id':'c1','value':'Information Technology'},{'id':'c2','value':'Mechanical Engineer'},{'id':'c3','value':'Electronics Engineer'},{'id':'c4','value':'Computer Application'},{'id':'c5','value':'Computer Science'},{'id':'c6','value':'Cyber Science'},{'id':'c7','value':'BioInformatics'}],
            brdata: [{'id':'b1','value':'B.Sc'},{'id':'b2','value':'M.E'},{'id':'b3','value':'M.C.A'},{'id':'b4','value':'BCA'},{'id':'b5','value':'B.E'},{'id':'b6','value':'M.Sc'}],
            cmpcourse: [{'DegreeId':'b1','Branches':['c1','c2','c3']},{'DegreeId':'b2','Branches':['c2']},{'DegreeId':'b3','Branches':['c4']},{'DegreeId':'b4','Branches':['c4']},{'DegreeId':'b5','Branches':['c1','c5','c6','c7']},{'DegreeId':'b6','Branches':['c1','c5','c7']}]   
        };
    });
    
  function config($urlRouterProvider,$stateProvider) {
    $urlRouterProvider.otherwise('/UNI/login');
    $stateProvider
    .state('UNI.course', {
      url: '/course',
      controller: 'courseCtrl',
      controllerAs: 'vm'/*,
      resolve :{
        list: function (){
          return {
            getall: true,
          };
        }
      }*/
    })
    .state('UNI.course.addCourse',{
      url: '/addcourses',
      views: {
        '@': {
          templateUrl: 'courses/addCourse.tpl.html',
          controller: 'courseCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('UNI.course.viewCourse', {
        url: '/viewCourse',
        views: {
          '@':{
            templateUrl: 'courses/viewCourse.tpl.html',
            controller:'courseCtrl',
            controllerAs:'vm'
            }
        }/*,
        resolve:{
          list: function () {
            return{
              getall:false,
            };
          }
        }*/
      });
  }
})();