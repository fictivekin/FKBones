define([
	'/lib/jasmine-setup.js',
	'/lib/sinon.js',
	'models/my_model'
], function(jasmine, sinon, MyModel) {
	jasmine.describe('MyModel', function() {
		var model;
		jasmine.beforeEach(function() {
			this.model = new MyModel();
		});

		jasmine.it('should be able to set the name', function() {
			this.model.setName('ehaas');
			jasmine.expect(this.model.getName()).toEqual('ehaas');
		});
	});
});