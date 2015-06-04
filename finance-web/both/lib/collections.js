db.securities = new Meteor.Collection('securities');
db.securities.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Human Readable Title",
    max: 200
  },
  description: {
    type: String,
    label: "A description of the asset",
    optional: true,
  },
  type: {
    type: String,
    label: "Code to uniquely identify the security",
    max: 200
  },
  quantity: {
    type: Number,
    label: "Number of assets",
    min: 0
  }
}));


db.entities = new Meteor.Collection('entities');
db.transactions = new Meteor.Collection('transactions');
