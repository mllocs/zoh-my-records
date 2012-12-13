ZohMyRecords.Views.RecordForm = Backbone.View.extend({

  template: JST['records/form'],

  events: {
    "click #cancel": "cancel",
    "submit #new_record": "createRecord",
    "submit #edit_record": "updateRecord"
  },

  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    this.model = (this.id === undefined) ? undefined : this.collection.get(this.id);
    $(this.el).html(this.template({ record: this.model }));
    return this;
  },

  cancel: function(event) {
    event.preventDefault();
    this.goToMain();
  },

  createRecord: function(event) {
    event.preventDefault();
    this.collection.create(this.getAttributes(), {
      wait: true,
      success: this.goToMain,
      error: this.handleError
    });
  },

  updateRecord: function(event) {
    event.preventDefault();
    this.model.save(this.getAttributes(), {
      wait: true,
      success: this.goToMain,
      error: this.handleError
    });

  },

  getAttributes: function() {
    return {
      title: $('#record_title').val(),
      artist: $('#record_artist').val(),
      cover_url: $('#record_cover_url').val(),
      spotify_uri: $('#record_spotify_uri').val()
    };
  },

  handleError: function(entry, response) {
    if(response.status == 422) {
      var errors = $.parseJSON(response.responseText).errors;
      for (attribute in errors) {
        var messages = errors[attribute];
        alert("" + attribute + " " + messages[0]);
        $("#record_" + attribute).focus();
        break;
      }
    }
  },

  goToMain: function() {
    Backbone.history.navigate("/", true);
  }

});
