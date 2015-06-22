db.securities = new Meteor.Collection('securities');
db.securities.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Human Readable Name",
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
db.entities.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Human Readable Name",
    max: 200
  },
  description: {
    type: String,
    label: "A description of the entity",
    optional: true,
  },
  type: {
    type: String,
    label: "Code to uniquely identify the entity",
    max: 200
  },
}));


UserEntitySchema = new SimpleSchema({
  _id: {
    type: String,
    label: "User object's or Entity object's id",
  },
  type: {
    type: String,
    label: "'User' or 'Entity'",
  },
});

BuyerSchema = UserEntitySchema;
SellerSchema = UserEntitySchema;


db.transactions = new Meteor.Collection('transactions');
db.transactions.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Human Readable Name",
    max: 200
  },
  buyer: {
    type: BuyerSchema,
  },
  seller: {
    type: SellerSchema,
  },
  description: {
    type: String,
    label: "A description of the transaction",
    optional: true,
  },
  type: {
    type: String,
    label: "Code to uniquely identify the transaction",
    max: 200
  },
}));
