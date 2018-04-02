(function () {
    
    angular.module('app', [
        'app.core',
        'app.widgets',
        'ui.router',

        /*
        * Feature areas
        */
        'app.layout',
        'app.details',
    
        
    ])
        .controller('HomeController', HomeController);
        
        
    HomeController.$inject = ['logger', '$timeout', 'spinner', 'dataService', '$document', '$location'];
    function HomeController(logger, $timeout, spinner, dataService, $document, $location) {
        var vm = this;

        //Hello World
        vm.myModel = 'World';
        //logger.success('Home Controller Activated');
        //throw new Error('Test exception');

        //Get data (from another container?)
        vm.apiUrl = 'http://localhost:32770/api/values/dogs';
        vm.dogs = [];
        //vm.otherUrl = $document.location.scheme + '://' + $document.location.hostname + ':3030';
        vm.otherUrl = $location.$$protocol + '://' + $location.$$host + ':8080/api/values/dogs';

        vm.getDogs = function () {
            spinner.spinnerShow();

            dataService.getMoreDogs(vm.apiUrl)
                .then(function (dogs) {
                    vm.dogs = dogs;
                })    
                .finally(function () {
                    spinner.spinnerHide();
                });
        }

        //Toastr
        vm.message = 'Toast this message';
        
        vm.info = function () {
            logger.info(vm.message);
        }

        vm.success = function () {
            logger.success(vm.message);
        }

        vm.error = function () {
            logger.error(vm.message);
        }

        //Spinner
        vm.duration = '2000'; 
        vm.startSpinner = function () {
            spinner.spinnerShow();

            $timeout(function() {
                spinner.spinnerHide();
                }, vm.duration);
            
         }

    }
    
})();