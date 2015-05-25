//  Iron Router - for useage see https://github.com/EventedMind/iron-router

Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.map(function () {

  // delete me and replace with your homepage
  this.route('homeTemp', {path: '/'})

  // security routes
  this.route('securities',     { path: '/security',          controller: SecuritiesController.Index });
  this.route('securitiesNew',  { path: '/security/new',      controller: SecuritiesController.New });
  this.route('securitiesShow', { path: '/security/:id',      controller: SecuritiesController.Show });
  this.route('securitiesEdit', { path: '/security/edit/:id', controller: SecuritiesController.Edit });

  // entity routes
  this.route('entities',     { path: '/entity',          controller: EntitiesController.Index });
  this.route('entitiesNew',  { path: '/entity/new',      controller: EntitiesController.New });
  this.route('entitiesShow', { path: '/entity/:id',      controller: EntitiesController.Show });
  this.route('entitiesEdit', { path: '/entity/edit/:id', controller: EntitiesController.Edit });

  // transaction routes
  this.route('transactions',     { path: '/transaction',          controller: TransactionsController.Index });
  this.route('transactionsNew',  { path: '/transaction/new',      controller: TransactionsController.New });
  this.route('transactionsShow', { path: '/transaction/:id',      controller: TransactionsController.Show });
  this.route('transactionsEdit', { path: '/transaction/edit/:id', controller: TransactionsController.Edit });

});//<end-routes>

