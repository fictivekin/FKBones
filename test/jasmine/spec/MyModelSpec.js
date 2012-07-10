define([
	'/lib/jasmine-setup.js',
	'/lib/sinon.js',
	'models/my_model'
], function(jasmine, sinon, MyModel) {
	jasmine.describe('MyModel', function() {
		var model;

		jasmine.beforeEach(function() {
			model = new MyModel();
		});

		jasmine.it('should be cool', function() {
			jasmine.expect(5).toEqual(5);
		});
	});
});