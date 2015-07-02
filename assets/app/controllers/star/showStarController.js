app.controller('showStarController', function ($scope, $compile, $routeParams, $translate, $location, $modal, starService, APPDIR, PARCIALFORMAT, PARCIALDIR) {

    $scope.star = {nickname:'', id: null, imgid: null, birth: null, description: null, proffession: null, familystatus:null};
    $scope.showDestroy=false;
    $scope.posts = [];

    function init() {
        if(typeof $routeParams.starID != "undefined"){
            $scope.star.id = $routeParams.starID;
            starService.starinfo($scope.star.id, function(data){
                $scope.star = data;
            });
            
        } else {
            $location.path('/star');
        }
    }

    init();
});
