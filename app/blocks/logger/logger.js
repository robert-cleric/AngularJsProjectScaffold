(function() {
    'use strict';
    angular
        .module('blocks.logger')
        .factory('logger', logger);
    logger.$inject = ['$log', 'toastr', '$injector'];
    function logger($log, toastr, $injector) {
        var service = {
            error   : error,
            info    : info,
            success : success,
            warning : warning,
            //straight to the console, bypass toastr
            log     : $log.log,
            debug   : $log.debug
        };
        return service;
        ////////////////////////
        function error(message, data, title) {
            toastr.error(message, title);
            $log.error('Error: ' + message, data);           
            // if (sendLogToServer) {
            //     logError(message);
            // }
        }
        // function logError(message) {
        //     var data = { message: message };
        //     var http = $injector.get('$http');
        //     return http.post(loggingServiceUrl, data)
        //         .then(function () { })
        //         .catch(logErrorFailed);
        //     function logErrorFailed(error) {
        //         var newMessage = 'XHR Failed for logger.  ';
        //         if (error.statusText) {
        //             newMessage = newMessage + '\n' + error.statusText;
        //         }
                
        //         $log.error('Error: ' + newMessage, error);
        //     }
        // }
        function info(message, data, title) {
            toastr.info(message, title);
            $log.info('Info: ' + message, data);
        }
        function success(message, data, title) {
            toastr.success(message, title);
            $log.info('Success: ' + message, data);
        }
        function warning(message, data, title) {
            toastr.warning(message, title);
            $log.warn('Warning: ' + message, data);
        }
    }
})();