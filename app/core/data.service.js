(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataService', dataService);

    dataService.$inject = ['$http', '$q', 'logger', 'exception'];

    function dataService($http, $q, logger, exception) {

        var service = {
            getDogs: getDogs,
            getMoreDogs: getMoreDogs
        };

        return service;

        ////////////////////////////

        function getDogs() {
            return $http.get('https://dog.ceo/api/breeds/list/all')
                .then(getDogsComplete)
                .catch(function (error) {
                    exception.catcher('XHR Failed for getDogs. ' + error.statusText)(error);
                });

            function getDogsComplete(result) {
                return result.data.message;
            }
        }

        function getMoreDogs(url) {
            return $http.get(url)
                .then(getMoreDogsComplete)
                .catch(function (error) {
                    exception.catcher('XHR Failed for getMoreDogs. ' + error.statusText)(error);
                });
            function getMoreDogsComplete(result) {
                return result.data;
            }

        }

    }

})();