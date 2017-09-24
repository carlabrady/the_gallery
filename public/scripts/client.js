console.log('js');

var myApp = angular.module('myApp', []);

myApp.controller('GalleryController', function($http) {
    console.log('ng');
    var vm = this;

   // get pics array function
   vm.getPics = function(){
        $http ({
            method: 'GET',
            url: '/gallery'
        }).then (function (response){
            vm.picArray = response.data;
            console.log(vm.picArray);
        });
    };

    // get all pics on page load
    vm.getPics();

    vm.toggle = function(img){
        img.view = !img.view;
    }
})