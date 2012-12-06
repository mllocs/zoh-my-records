ZohMyRecords.Views.RecordsIndex = Backbone.View.extend({

  template: JST['records/index'],

  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    $(this.el).html(this.template({ records: this.collection }));
    return this;
  }

});
