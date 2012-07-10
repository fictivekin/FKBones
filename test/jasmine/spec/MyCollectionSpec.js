define([
	'/lib/jasmine-setup.js',
	'/lib/sinon.js',
	'collections/my_collection'
], function(jasmine, sinon, MyCollection) {
	jasmine.describe('MyCollection', function() {
		var collection;

		jasmine.beforeEach(function() {
			collection = new MyCollection();
		});

		jasmine.it('', function() {
			jasmine.expect(5).toEqual(5);
		});
	});
});