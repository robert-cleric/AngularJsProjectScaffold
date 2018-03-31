(function () {
    'use strict';
        
    angular
        .module('app.details')
        .controller('DetailsController', DetailsController);
    
    DetailsController.$inject = ['dataService', 'dogs'];
    
    function DetailsController(dataService, dogs) {
        var vm = this;
        
        vm.dogs = dogs['terrier'];  

        //activate();

        //////////////

        // function activate() {
        //     return dataService.getDogs()
        //         .then(showDogs);
        // }

        // function showDogs(dogs) {
        //     vm.dogs = dogs['terrier'];            
        // }

    }        

})();