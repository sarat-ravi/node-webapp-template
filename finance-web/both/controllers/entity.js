
EntitiesController = AppController.extend({
  layoutTemplate: "mainLayout",

  waitOn: function() {
    // return Meteor.subscribe('entities');
  },

  onBeforeAction: function() {
    console.log("  [EntitiesController]: loading", this.url);
    this.next();
  },

  index: function() {
    console.log("[EntitiesController]: index");
    // Meteor.subscribe('entities');
    var ret = db.entities.find({});
    // console.log(ret);
    this.render('entities', {
      data: {
        title: "Sarat's Entities",
        // entities: db.entities.find()
        entities: ret,
      } 
    });
  },

  show: function() {
    console.log("[EntitiesController]: show " + this.params._id);
    var entity = db.entities.findOne({_id: this.params._id});
    this.render('entityShow', {
      data: {
        entity: entity,
      },
    });
  },

  new: function() {
    console.log("[EntitiesController]: new");
    this.render('entityNew', {
      data: {} 
    });
  },

  edit: function() {
    console.log("[EntitiesController]: edit " + this.params._id);
    var security = db.entities.findOne({_id: this.params._id});
    this.render('entityEdit', {
      data: {
        entity: entity,
      },
    });
  },
});
