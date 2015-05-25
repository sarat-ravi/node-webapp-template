// page for a list of Transactions - /transactions
TransactionsController.Index = AppController.extend({
  template: 'transactions',

  waitOn: function() {
    //return Meteor.subscribe('transactions');
  },

  data: function() {
    //return db.transactions.find();
  },

  onBeforeAction: function() {
    console.log("  [TransactionsController.Index]: loading", this.url);
    this.next();
  }
});


// page for creating a single Transaction - /transactions/new/:id
TransactionsController.New = AppController.extend({
  template: 'transactionsNew',

  onBeforeAction: function() {
    console.log("  [TransactionsController.New]: loading", this.url);
    this.next();
  }
});


// page for showing a single Transaction - /transactions/:id
TransactionsController.Show = AppController.extend({
  template: 'transactionsShow',

  waitOn: function() {
    //return Meteor.subscribe('transaction', this.params.id);
  },

  data: function() {
    //return db.transactions.findOne(this.params.id);
  },

  onBeforeAction: function() {
    console.log("  [TransactionsController.Show]: loading", this.url);
    this.next();
  }
});


// show edit page for single Transaction : /transactions/edit/:id
TransactionsController.Edit = AppController.extend({
  template: 'transactionsEdit',

  waitOn: function() {
    //return Meteor.subscribe('transaction', this.params.id);
  },

  data: function() {
    //return db.transactions.findOne(this.params.id);
  },

  onBeforeAction: function() {
    console.log("  [TransactionsController.Edit]: loading", this.url);
    this.next();
  }
});


