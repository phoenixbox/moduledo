define([
  'jquery',
  'underscore',
  'backbone',
  'collections/todos',
  'views/todo',
  'text!templates/stats.html',
  ], function($, _, Backbone, Todos, TodoView, statsTemplate){

  var AppView = Backbone.View.extend({
    el: $('#todoapp'),

    statsTemplate: statsTemplate,

    events: {

    },

    initialize: function(){

    },

    render: function(){
      var done = Todos.done().length;
      // Target #todo-stats within el -> '#todoapp' -> in index.html
      this.$('#todo-stats').html(this.statsTemplate({
        // Pass objects to the template
        total: Todos.length,
        done: Todos.done().length,
        remaining: Todos.remaining().length
      }));
    }
  });

  return AppView;
})