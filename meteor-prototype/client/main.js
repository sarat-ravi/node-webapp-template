MainController = AppController.extend({
  layoutTemplate: "mainLayout",

  onBeforeAction: function() {
    console.log("  [MainController]: loading", this.url);
    this.next();
  },

  index: function() {
    console.log("[MainController]: index");
    this.render('main');
  }
});
