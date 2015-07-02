var app = angular.module('fysamAPP', ['ngRoute', 'ui.bootstrap', 'pascalprecht.translate']);

app.config(function ($routeProvider) {

  $routeProvider
      .when('/star',
          {
              controller: 'starController',
              templateUrl: '/views/overview'
          })
      .when('/star/:starID', 
          {
              controller: 'showStarController',
              templateUrl: '/views/star'
          })
      .otherwise({ redirectTo: '/star' });
});

app.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('de', {
            'LANG_SERVER_ERROR': 'Verbindungsfehler'

        });

        $translateProvider.preferredLanguage('de');
}]);

app.constant("APPDIR", "http://127.0.0.1:1337/js/app");
app.constant("APIDIR", "http://127.0.0.1:1337/api/v1/");
app.constant("PARCIALFORMAT", "");
app.constant("PARCIALDIR", "http://127.0.0.1:1337");