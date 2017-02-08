(function() {

  "use strict"

  var app = angular.module("root", []);
  app.controller("ctrl1", function($scope, $http){
    $http.get('https://ccksjpcd8l.execute-api.us-west-2.amazonaws.com/v2/clients')
    .success(function(response){
    console.log(JSON.stringify(response.data));
    })
    .error(function(error){
      if(error === null){
        console.log("Critical Error");
        return;
      }
      console.log(error.status);
    })
  });
})();
