app.controller('showStarController', function ($scope, $compile, $routeParams, $translate, $location, $modal, starService, APPDIR, PARCIALFORMAT, PARCIALDIR) {

    $scope.star = {nickname:'', id: null, imgid: null, birth: null, description: null, proffession: null, familystatus:null};
    $scope.showDestroy=false;
    $scope.posts = [];

    function init() {
        if(typeof $routeParams.starID != "undefined"){
            $scope.star.id = $routeParams.starID;
            starService.starinfo($scope.star.id, function(data){
                $scope.star = data;
                setBackground();
            });
            starService.getposts($scope.star.id, function(data){
                $scope.posts = data.posts;
            });
            
        } else {
            $location.path('/star');
        }
    }

    function setBackground(){
        $(".bgimage").css("background-image","url(http://img.celepedia.de/celepedia/rest/pictures/download/"+$scope.star.imgid+"?profile=SQUARE_300_2)");
    }

    init();
});
