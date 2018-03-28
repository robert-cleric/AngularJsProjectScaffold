(function() {
    'use strict';

    angular
        .module('app.core')
        .config(toastrConfig);

    toastrConfig.$inject = ['toastr'];

    function toastrConfig(toastr) {
        //toastr.options.timeOut = 4000;
        //toastr.options.positionClass = 'toast-bottom-right';
    
        //toastr.options.timeOut = 0;
        //toastr.options.extendedTimeOut = 0;
    }


    var config = {
        appErrorPrefix: '[APT Error] ',
        appTitle: 'AngularJs Project Template',
        version: '1.0.0'
    }

    angular
        .module('app.core')
        .value('config', config);


    angular
        .module('app.core')
        .config(configure);

    configure.$inject = ['$logProvider', 'exceptionHandlerProvider', '$locationProvider'];

    function configure($logProvider, exceptionHandlerProvider, $locationProvider) {
        //Change the default hash prefix from #! to #.
        //Rather than mydomain.com/#1/a/b/c the URL will become mydomain.com/#/a/b/c
        $locationProvider.hashPrefix('');
    
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        // Configure the common exception handler
            exceptionHandlerProvider.configure(config.appErrorPrefix);
        }

})();