(function(){
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$timeout', 'config', 'logger', 'spinner'];

    function ShellController($timeout, config, logger, spinner){
        var vm = this;

        vm.busyMessage = 'We are really busy';
        vm.showSplash = true;       
        vm.spinner = spinner;
        vm.spinnerOptions = {
            radius: 40,
            lines: 7,
            length: 0,
            width: 30,
            speed: 1.7,
            corners: 1.0,
            trail: 100,
            color: '#F58A00'
        };
         

        activate();

        function activate() {
            logger.success(config.appTitle + 'loaded!', null);    
            hideSplash();
            vm.spinner.isBusy = false;
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                vm.showSplash = false;
                }, 1000);
        }
     }

})();