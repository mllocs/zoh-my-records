ZohMyRecords.Views.Record = Backbone.View.extend({

  template: JST['records/record'],
  tagName: "li",

  events: {
    "click .delete": "deleteRecord"
  },

  initialize: function() {
    this.model.on('destroy', this.fadeOut, this);
  },

  render: function() {
    $(this.el).html(this.template({ record: this.model }));
    return this;
  },

  deleteRecord: function(event) {
    event.preventDefault();
    if(confirm("Are you sure?")) {
      this.model.destroy({
        wait: true,
        error: this.handleError
      });
    }
  },

  fadeOut: function() {
    $(this.el).fadeOut();
  },

  handleError: function(entry, response) {
    alert("sorry but something went wrong.");
  }

});
