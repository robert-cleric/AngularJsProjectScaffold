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
        
        
    HomeController.$inject = ['logger', '$timeout', 'spinner'];
    function HomeController(logger, $timeout, spinner) {
        var vm = this;

        //Hello World
        vm.myModel = 'World';
        //logger.success('Home Controller Activated');
        //throw new Error('Test exception');

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