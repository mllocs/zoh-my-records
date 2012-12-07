ZohMyRecords.Routers.Records = Backbone.Router.extend({

  routes: { 
    "": "index",
    "records/new": "newRecord"
  },

  initialize: function() {
    this.collection = new ZohMyRecords.Collections.Records();
    this.collection.fetch();
  },

  index: function() {
    view = new ZohMyRecords.Views.RecordsIndex({ collection: this.collection });
    $('#container').html(view.render().el);
  },

  newRecord: function() {
    view = new ZohMyRecords.Views.NewRecord({ collection: this.collection });
    $('#container').html(view.render().el);
  }

});
