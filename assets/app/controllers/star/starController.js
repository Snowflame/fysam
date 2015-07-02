app.controller('starController', function ($scope, $modal, $location, starService, PARCIALFORMAT, PARCIALDIR) {
    $scope.stars = {};
    $scope.loadStars = {loading: true};

    function init() { 
        starService.listStars(function(data){
            $scope.loadStars.loading = false;
            $scope.stars = data;
            setDefaultBackground();
        });
    }
    function setDefaultBackground(){
        $(".bgimage").css("background-image","url(/images/bg_pic_blured.jpg)");
    }

    init();
});
