require.config({
  baseUrl: '../',
  paths: {
    jquery: "libs/jquery",
    underscore: "libs/underscore",
    backbone: "libs/backbone",
    text: "libs/text",
    localStorage: "libs/backbone.localStorage"
  },
});

// Load the primary view for
require([
  "views/app"
  ], function(AppView){
  var app_view = new AppView();
});