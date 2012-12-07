ZohMyRecords.Views.NewRecord = Backbone.View.extend({

  template: JST['records/new'],

  events: {
    "click #cancel": "cancel",
    "submit #new_record": "createRecord"
  },

  render: function() {
    $(this.el).html(this.template());
    return this;
  },

  cancel: function(event) {
    event.preventDefault();
    this.goToMain();
  },

  createRecord: function(event) {
    event.preventDefault();
    this.collection.create({
      title: $('#new_record_title').val(),
      artist: $('#new_record_artist').val(),
      cover_url: $('#new_record_cover_url').val(),
      spotify_uri: $('#new_record_spotify_uri').val()
    }, {
      wait: true,
      success: this.goToMain,
      error: this.handleError
    });
  },

  handleError: function(entry, response) {
    if(response.status == 422) {
      errors  = $.parseJSON(response.responseText).errors;
      for (attribute in errors) {
        messages = errors[attribute];
        alert("" + attribute + " " + messages[0]);
        break;
      }
    }
  },

  goToMain: function() {
    Backbone.history.navigate("/", true);
  }

});
