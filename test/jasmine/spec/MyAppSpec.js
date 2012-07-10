define([
	'/lib/jasmine-setup.js',
	'/lib/sinon.js',
	'apps/my_app'
], function(jasmine, sinon, MyApp) {
	jasmine.describe('MyApp', function() {
		var app;

		jasmine.beforeEach(function() {
			app = new MyApp();
		});

		jasmine.it('', function() {
		});
	});
});