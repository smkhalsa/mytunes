// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enterQueue : function() {
    // Trigger an event on the queue in AppModel
    this.trigger('enqueue', this);
  },

  leaveQueue : function() {
    this.trigger('dequeue', this);
  }

});
