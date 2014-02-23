require.config({
  baseUrl: '../',
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    text: 'lib/text',
  },
});

// Load the primary view for
require([
  "views/app"
  ], function(AppView){
  var app_view = new AppView();
});