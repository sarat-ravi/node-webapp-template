
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













// page for a list of Entities - /entities
EntitiesController.Index = AppController.extend({
  template: 'entities',

  waitOn: function() {
    //return Meteor.subscribe('entities');
  },

  data: function() {
    //return db.entities.find();
  },

  onBeforeAction: function() {
    console.log("  [EntitiesController.Index]: loading", this.url);
    this.next();
  }
});


// page for creating a single Entity - /entities/new/:id
EntitiesController.New = AppController.extend({
  template: 'entitiesNew',

  onBeforeAction: function() {
    console.log("  [EntitiesController.New]: loading", this.url);
    this.next();
  }
});


// page for showing a single Entity - /entities/:id
EntitiesController.Show = AppController.extend({
  template: 'entitiesShow',

  waitOn: function() {
    //return Meteor.subscribe('entity', this.params.id);
  },

  data: function() {
    //return db.entities.findOne(this.params.id);
  },

  onBeforeAction: function() {
    console.log("  [EntitiesController.Show]: loading", this.url);
    this.next();
  }
});


// show edit page for single Entity : /entities/edit/:id
EntitiesController.Edit = AppController.extend({
  template: 'entitiesEdit',

  waitOn: function() {
    //return Meteor.subscribe('entity', this.params.id);
  },

  data: function() {
    //return db.entities.findOne(this.params.id);
  },

  onBeforeAction: function() {
    console.log("  [EntitiesController.Edit]: loading", this.url);
    this.next();
  }
});


