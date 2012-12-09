ZohMyRecords.Routers.Records = Backbone.Router.extend({

  routes: { 
    "": "index",
    "records": "index",
    "records/new": "newRecord",
    "records/:id/edit": "editRecord"
  },

  initialize: function() {
    this.collection = new ZohMyRecords.Collections.Records();
    this.collection.fetch();
  },

  index: function() {
    var view = new ZohMyRecords.Views.RecordsIndex({ collection: this.collection });
    $('#container').html(view.render().el);
  },

  newRecord: function() {
    var view = new ZohMyRecords.Views.NewRecord({ collection: this.collection });
    $('#container').html(view.render().el);
  },

  editRecord: function(id) {
    var view = new ZohMyRecords.Views.NewRecord({ collection: this.collection, id: id });
    $('#container').html(view.render().el);
  }

});
