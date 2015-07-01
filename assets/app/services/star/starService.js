app.service('starService', function ($rootScope, $http, APIDIR) {

    function listLayout(callback){ 
      $http({ 
        url: APIDIR+'star',
        method: 'GET'
      }).success(function (data) {
        callback(data);  
      });
    }

    function createLayout(name, callback){
      $http({ 
            url: APIDIR+'layout',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: {"name":name}
      }).success(function (data) {
          callback(data);
      });
    }

    function deleteLayout(id, callback){
      $http({
            url: APIDIR+'layout/'+id,
            method: 'DELETE'
      }).success(function () {
          callback();
      });
    }
     
    function updateLayout(id, name, contentelements, callback){
      $http({
            url: APIDIR+'layout/'+id,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: {"name":name, "contentelements":contentelements}
      }).success(function (data) {
        for(var i = 0; data.length > i; i++){
          //data[i].position = i;
        }
        callback(data);
      });
    }

    function getLayout(id, callback){
      $http({
            url: APIDIR+'layout/'+id,
            method: 'GET',
      }).success(function (data) {
          callback(data);
      });
    }

    return {
      listLayout: function (callback) {
        listLayout(callback);
      },
      createLayout: function(name, callback){
        createLayout(name, callback);
      },
      deleteLayout: function(id, callback){
        deleteLayout(id, callback);
      },
      updateLayout: function (id, name, contentelements, callback) {
        updateLayout(id, name, contentelements, callback);
      },
      getLayout: function(id, callback){
        getLayout(id, callback);
      }
    };
});
