(function () {
    "use strict";

    angular
		.module('cabecera.Directiva', [])		
		.directive('cabecera', cabeceraDirectiva);

    function cabeceraDirectiva() {

        var directive = {
            restrict: 'E',
            replace: true,
            scope: true,
            controller: cabeceraController,
            controllerAs: 'cabctrl',
            templateUrl: TEMPLATE_CABECERA
        };

        return directive;
    }
    cabeceraController.$inject = ['$scope', '$rootScope', '$location', '$filter'];

    function cabeceraController($scope, $rootScope, $location, $filter) {
    }



})();
