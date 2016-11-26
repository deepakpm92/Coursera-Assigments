(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];


    function LunchCheckController($scope) {

        $scope.items = "";
        $scope.message = "";





        $scope.Check = function() {
            var arr = ($scope.items).split(',');
            var i;
            var len = arr.length;

            for(i=0; i<arr.length; i++){

             if (arr[i] == "") {

               len-=1;

             }

            }



            if ($scope.items == "") {

                $scope.c = "error";
                $scope.d = "error1";

                $scope.message = "Please enter data first";

            } else if (len <= 3) {

                $scope.c = "success";
                $scope.d = "success1";
                $scope.message = "Enjoy!";

            } else {
                $scope.c = "success";
                $scope.message = "Too much!";

            }








        };








    }









})();
