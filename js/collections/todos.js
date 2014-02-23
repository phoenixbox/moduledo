define([
  'underscore',
  'backbone',
  'libs/backbone/localStorage',
  'models/todo'
  ], function(_, Backbone, Store, Todo){
  var TodosCollection = Backbone.Collection.extend({
    model: Todo,
    // Important localStorage declaration - all saved under the todos namespace
    localStorage: new Store('todos'),

    done: function(){
      return this.filter(function(todo){
        return todo.get('done');
      });
    },
    remaining: function(){
      return this.without.apply(this, this.done());
    }
  });

  return TodosCollection;
});