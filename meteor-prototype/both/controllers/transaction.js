TransactionsController = AppController.extend({
  layoutTemplate: "mainLayout",

  waitOn: function() {
    // return Meteor.subscribe('transactions');
  },

  onBeforeAction: function() {
    console.log("  [TransactionsController]: loading", this.url);
    this.next();
  },

  index: function() {
    console.log("[TransactionsController]: index");
    // Meteor.subscribe('transactions');
    var ret = db.transactions.find({});
    // console.log(ret);
    this.render('transactions', {
      data: {
        title: "Sarat's transactions",
        // transactions: db.transactions.find()
        transactions: ret,
      } 
    });
  },

  show: function() {
    console.log("[TransactionsController]: show " + this.params._id);
    var transaction = db.transactions.findOne({_id: this.params._id});
    this.render('transactionShow', {
      data: {
        transaction: transaction,
      },
    });
  },

  new: function() {
    console.log("[TransactionsController]: new");
    this.render('transactionNew', {
      data: {} 
    });
  },

  edit: function() {
    console.log("[TransactionsController]: edit " + this.params._id);
    var security = db.transactions.findOne({_id: this.params._id});
    this.render('transactionEdit', {
      data: {
        transaction: transaction,
      },
    });
  },
});
