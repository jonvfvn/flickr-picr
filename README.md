# flickr-pickr

This app allows users to search flickr using flickr.photos.search api and displays results.

View the project in a text editor or IDE of your choice. I use webstorm as it has quite nice code completion and error detection. 
To run just open the index.html file in a browser of your choice.

AngularJS used alongside Angular Material. AngularJS chosen to create a simple and clean single page application. 
Angular material chosen for its consistant design language across device form factors, its responsive, plus many users will already be familiar with this design language.

- app.js includes an immediately invoked function that includes the module flickrPicr
- When the user hits return after typing a search term it accesses the searchTerm model and uses the http service in angular to use the flickr API
- Data is received from flickr in json format and stored in the results array and then displayed in the Material cards.
- To let the user know the data is loading a progress bar is including that is hidden until the user hits return, and is hidden again when data appears on screen. 


Future increments:
Infinite scrolling list
Better routing
