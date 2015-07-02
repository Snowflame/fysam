app.controller('starController', function ($scope, $modal, $location, starService, PARCIALFORMAT, PARCIALDIR) {
    $scope.stars = {};
    $scope.loadStars = {loading: true};

    function init() { 
        starService.listStars(function(data){
            $scope.loadStars.loading = false;
            $scope.stars = data;
        });
    }

    init();
});
