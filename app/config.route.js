(function () {
    'use strict';

    angular
        .module('app')
        .config(mainRouter);

    mainRouter.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider'];

    function mainRouter($stateProvider, $locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
        //Change the default hash prefix from #! to #.
        //Rather than mydomain.com/#!/a/b/c the URL will become mydomain.com/#/a/b/c
        $locationProvider.hashPrefix('');

        $urlMatcherFactoryProvider.caseInsensitive(true);
        $urlMatcherFactoryProvider.strictMode(false);

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: '/home/home.html'
            })
            .state('details', {
                url: '/details',
                controller: 'DetailsController',
                controllerAs: 'vm',
                templateUrl: '/details/details.html',
                resolve: {
                    dogs: dogService
                }
            });
        
        $urlRouterProvider.otherwise('/');
    }


    dogService.$inject = ['dataService', 'spinner'];

    function dogService(dataService, spinner) {
        spinner.spinnerShow();
        return dataService.getDogs()
                .finally(function () {
                    spinner.spinnerHide();
                });
    }
    
})();