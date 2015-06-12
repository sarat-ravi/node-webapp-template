
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















// page for a list of Securities - /securities
SecuritiesController.Index = AppController.extend({
  template: 'securities',

  waitOn: function() {
    //return Meteor.subscribe('securities');
  },

  data: function() {
    //return db.securities.find();
  },

  onBeforeAction: function() {
    console.log("  [SecuritiesController.Index]: loading", this.url);
    this.next();
  }
});


// page for creating a single Security - /securities/new/:id
SecuritiesController.New = AppController.extend({
  template: 'securitiesNew',

  onBeforeAction: function() {
    console.log("  [SecuritiesController.New]: loading", this.url);
    this.next();
  }
});


// page for showing a single Security - /securities/:id
SecuritiesController.Show = AppController.extend({
  template: 'securitiesShow',

  waitOn: function() {
    //return Meteor.subscribe('security', this.params.id);
  },

  data: function() {
    //return db.securities.findOne(this.params.id);
  },

  onBeforeAction: function() {
    console.log("  [SecuritiesController.Show]: loading", this.url);
    this.next();
  }
});


// show edit page for single Security : /securities/edit/:id
SecuritiesController.Edit = AppController.extend({
  template: 'securitiesEdit',

  waitOn: function() {
    //return Meteor.subscribe('security', this.params.id);
  },

  data: function() {
    //return db.securities.findOne(this.params.id);
  },

  onBeforeAction: function() {
    console.log("  [SecuritiesController.Edit]: loading", this.url);
    this.next();
  }
});


