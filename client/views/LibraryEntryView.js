// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    // starting point for playing songs
    // 'click': 'songPlay',
    'click' : 'addToQueue'
  },

  // songPlay : function() {
  //    this.model.play();
  // },

  addToQueue : function() {
    this.model.enterQueue();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
