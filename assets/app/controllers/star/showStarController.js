app.controller('showStarController', function ($scope, $compile, $routeParams, $translate, $location, $modal, starService, APPDIR, PARCIALFORMAT, PARCIALDIR) {

    $scope.star = {name:'',id:0};
    $scope.showDestroy=false;
    $scope.posts = [];


    function init() {
        if(typeof $routeParams.starID != "undefined"){
            $scope.star.id = $routeParams.starID;
            
        } else {
            $location.path('/star');
        }
    }

    init();
});
