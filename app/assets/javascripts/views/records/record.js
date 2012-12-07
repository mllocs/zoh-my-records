ZohMyRecords.Views.Record = Backbone.View.extend({

  template: JST['records/record'],
  tagName: "li",

  render: function() {
    $(this.el).html(this.template({ record: this.model }));
    return this;
  }

});
