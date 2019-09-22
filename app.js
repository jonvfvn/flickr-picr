(function(){

  'use strict';

  angular.module('flickrPicr', ['ngMaterial'])
      .controller('ListController', ['$scope', '$http', function($scope, $http){

        //create empty array of results
        $scope.results = [];

        //disable progress bar
        $scope.isSearching = false;

        $scope.search = function() {

          $scope.isSearching = true;

          $http({
            method: 'GET',
            url: 'https://api.flickr.com/services/rest',
            params: {
              method: 'flickr.photos.search',
              api_key: 'af01432925d445e62ff4dc4c1efecd82',
              //user input
              text: $scope.searchTerm,
              format: 'json',
              nojsoncallback: 1
            }

          }).then (function(response){

            //bind data to results array
            $scope.results = response.data;

            // disable progress bar after searching
            $scope.isSearching = false;

          });

        };

      }]);

})();
