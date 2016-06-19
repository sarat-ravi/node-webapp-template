
SecuritiesController = AppController.extend({
  layoutTemplate: "mainLayout",

  waitOn: function() {
    // return Meteor.subscribe('securities');
  },

  onBeforeAction: function() {
    console.log("  [SecuritiesController]: loading", this.url);
    this.next();
  },

  index: function() {
    console.log("[SecuritiesController]: index");
    // Meteor.subscribe('securities');
    var ret = db.securities.find({});
    // console.log(ret);
    this.render('securities', {
      data: {
        title: "Sarat's Securities",
        // securities: db.securities.find()
        securities: ret,
      } 
    });
  },

  show: function() {
    console.log("[SecuritiesController]: show " + this.params._id);
    var security = db.securities.findOne({_id: this.params._id});
    this.render('securityShow', {
      data: {
        security: security,
      },
    });
  },

  new: function() {
    console.log("[SecuritiesController]: new");
    this.render('securityNew', {
      data: {} 
    });
  },

  edit: function() {
    console.log("[SecuritiesController]: edit " + this.params._id);
    var security = db.securities.findOne({_id: this.params._id});
    this.render('securityEdit', {
      data: {
        security: security,
      },
    });
  },
});
