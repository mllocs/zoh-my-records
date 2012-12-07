ZohMyRecords.Views.RecordsIndex = Backbone.View.extend({

  template: JST['records/index'],

  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  appendRecord: function(record) {
    view = new ZohMyRecords.Views.Record({ model: record });
    $("ul#records").append(view.render().el);
  },

  render: function() {
    $(this.el).html(this.template());
    this.collection.each(this.appendRecord);
    return this;
  }

});
