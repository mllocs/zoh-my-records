ZohMyRecords.Views.RecordsIndex = Backbone.View.extend({

  template: JST['records/index'],

  events: {
    "click #new_record": "newRecord",
  },

  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  appendRecord: function(record) {
    var view = new ZohMyRecords.Views.Record({ model: record });
    this.$("li.new.record").after(view.render().el);
    // this.$("ul#records").append(view.render().el);
  },

  render: function() {
    $(this.el).html(this.template());
    this.collection.each(this.appendRecord, this);
    return this;
  },

  newRecord: function(event) {
    event.preventDefault();
    Backbone.history.navigate("records/new", true);
  }

});
