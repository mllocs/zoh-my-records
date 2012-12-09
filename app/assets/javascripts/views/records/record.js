ZohMyRecords.Views.Record = Backbone.View.extend({

  template: JST['records/record'],
  tagName: "li",

  events: {
    "click .delete": "deleteRecord",
    "click .edit": "editRecord"
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

  editRecord: function(event) {
    event.preventDefault();
    var edit_path = "/records/" + parseInt(this.model.get('id')) + "/edit"
    Backbone.history.navigate(edit_path, true);
  },

  fadeOut: function() {
    $(this.el).fadeOut();
  },

  handleError: function(entry, response) {
    alert("sorry but something went wrong.");
  }

});
