app.service('starService', function ($rootScope, $http, APIDIR) {

    function listStars(callback){ 
      $http({ 
        url: APIDIR+'star',
        method: 'GET'
      }).success(function (data) {
        callback(data);  
      });
    }

    function starinfo(id, callback){
      $http({ 
            url: APIDIR+'star/'+id,
            method: 'GET'
      }).success(function (data) {
          callback(data);
      });
    }

    function getposts(id, callback){
      $http({ 
            url: APIDIR+'star/getposts/'+id,
            method: 'GET'
      }).success(function (data) {
          callback(data);
      });
    }

    return {
      listStars: function (callback) {
        listStars(callback);
      },
      starinfo: function(id, callback){
        starinfo(id, callback);
      },
      getposts: function(id, callback){
        getposts(id, callback);
      }
    };
});
