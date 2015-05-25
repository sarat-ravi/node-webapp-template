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

});//<end-routes>

