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

Router.route('/transactions', {name: 'transactions', controller: 'TransactionsController', action: 'index' });
Router.route('/transaction/new', {name: 'transactionNew', controller: 'TransactionsController', action: 'new' });
Router.route('/transaction/edit/:_id', {name: 'transactionEdit', controller: 'TransactionsController', action: 'edit' });
Router.route('/transaction/show/:_id', {name: 'transactionShow', controller: 'TransactionsController', action: 'show' });

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
