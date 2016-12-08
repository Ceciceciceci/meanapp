'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
//angular.module('clientApp')
//  .controller('MoviesCtrl', function () {
//    this.awesomeThings = [
//      'HTML5 Boilerplate',
//      'AngularJS',
//      'Karma'
//    ];
//  });

angular.module('clientApp')
  .controller('ImagesCtrl', function (
    $scope, Image) {
    $scope.images = Image.getList().$object;
  });