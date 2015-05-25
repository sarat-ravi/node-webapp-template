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


