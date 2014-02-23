define([
  "underscore",
  "backbone"
  ], function(_, Backbone){
    var TodoModel = Backbone.Model.extend({
      defaults: {
        content: "Whattodo?",
        done: false
      },
      initialize: function(){

      },
      toggle: function(){
        this.save({done: !this.get('done')});
      },
      clear: function(){
        this.destroy();
        this.view.remove();
      }
    });
    return TodoModel;
});