(function() {
    'use strict';

    angular
        .module('app.widgets')
        .factory('spinner', spinner);
    
    function spinner() {
        var service = {
            spinnerHide: spinnerHide,
            spinnerShow: spinnerShow,
            isBusy : false
        };

        return service;

        /////////////////////////

        function spinnerHide() { spinnerToggle(false); }

        function spinnerShow() { spinnerToggle(true); }

        function spinnerToggle(show) {
            service.isBusy = show;
        }
    }

})();