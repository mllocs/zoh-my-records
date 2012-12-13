window.ZohMyRecords = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    new ZohMyRecords.Routers.Records();
    Backbone.history.start({ pushState: true });
  }
};

$(document).ready( function() {
  ZohMyRecords.init();
});