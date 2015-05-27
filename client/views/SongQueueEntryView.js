// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': 'songPlay',
    // 'click' : 'addToQueue'
  },

  songPlay : function() {
     this.model.play();
  },

  // addToQueue : function() {
  //   this.model.enterQueue();
  // },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
