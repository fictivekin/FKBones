define([
	'/lib/jasmine-setup.js',
	'/lib/sinon.js',
	'models/my_model'
], function(jasmine, sinon, MyModel) {
	jasmine.describe('MyModel', function() {
		var model, attrs = {name: 'evan'};
		jasmine.beforeEach(function() {
			this.model = new MyModel(attrs);
		});

		jasmine.it('should be able to get the name', function() {
			jasmine.expect(this.model.getName()).toEqual(attrs.name);
		});
		jasmine.it('should be able to set the name', function() {
			this.model.setName('ehaas');
			jasmine.expect(this.model.getName()).toEqual('ehaas');
		});
	});
});