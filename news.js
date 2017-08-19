var app = angular.module('newsApp', []);
app.controller('newsCtrl', function($scope, $http) {
    var my_api_key = 'f483fa2a3f714981afbee1a1996545b4';
    var newsSourses = ["the-sport-bible", "google-news", "bbc-news", "mirror", "reuters", "the-hindu", "the-new-york-times", "the-wall-street-journal"];
    for(var i = 0; i < newsSourses.length; i++){
        $http.get("https://newsapi.org/v1/articles?source=" + newsSourses[i] + "&apiKey=" + my_api_key)
        .then(function(response){
                $scope.sources = response.data.articles;
                console.log($scope.sources);
            }
         );
    }

});