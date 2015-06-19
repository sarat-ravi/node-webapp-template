//  Iron Router - for useage see https://github.com/EventedMind/iron-router

Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', {name: 'main', controller: 'MainController', action: 'index' });
Router.route('/securities', {name: 'securities', controller: 'SecuritiesController', action: 'index' });
Router.route('/security/new', {name: 'securityNew', controller: 'SecuritiesController', action: 'new' });
Router.route('/security/edit/:_id', {name: 'securityEdit', controller: 'SecuritiesController', action: 'edit' });
Router.route('/security/show/:_id', {name: 'securityShow', controller: 'SecuritiesController', action: 'show' });

Router.route('/entities', {name: 'entities', controller: 'EntitiesController', action: 'index' });
Router.route('/entity/new', {name: 'entityNew', controller: 'EntitiesController', action: 'new' });
Router.route('/entity/edit/:_id', {name: 'entityEdit', controller: 'EntitiesController', action: 'edit' });
Router.route('/entity/show/:_id', {name: 'entityShow', controller: 'EntitiesController', action: 'show' });

Router.map(function () {

  // security routes
  // this.route('securities',     { path: '/security',          controller: SecuritiesController.Index });
  // this.route('securitiesNew',  { path: '/security/new',      controller: SecuritiesController.New });
  // this.route('securitiesShow', { path: '/security/:id',      controller: SecuritiesController.Show });
  //this.route('securitiesEdit', { path: '/security/edit/:id', controller: SecuritiesController.Edit });

  // entity routes
  // this.route('entities',     { path: '/entities',          controller: EntitiesController.Index });
  // this.route('entitiesNew',  { path: '/entity/new',      controller: EntitiesController.New });
  // this.route('entitiesShow', { path: '/entity/:id',      controller: EntitiesController.Show });
  // this.route('entitiesEdit', { path: '/entity/edit/:id', controller: EntitiesController.Edit });

  // transaction routes
  this.route('transactions',     { path: '/transactions',          controller: TransactionsController.Index });
  this.route('transactionsNew',  { path: '/transaction/new',      controller: TransactionsController.New });
  this.route('transactionsShow', { path: '/transaction/:id',      controller: TransactionsController.Show });
  this.route('transactionsEdit', { path: '/transaction/edit/:id', controller: TransactionsController.Edit });

});//<end-routes>

Router.plugin('ensureSignedIn', {
  except: ['main', 'login']
});


AccountsTemplates.configureRoute('signIn', {
    name: 'login',
    path: '/login',
    layoutTemplate: 'mainLayout',
    redirect: function() {
      var user = Meteor.user();
      if (user) {
        Router.go('/user/' + user._id);
      }
    }
});

