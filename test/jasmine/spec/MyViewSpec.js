define([
	'libs/underscore',
	'libs/backbone',
	'/lib/jasmine-setup.js',
	'/lib/sinon.js',
	'views/my_view'
], function(_, Backbone, jasmine, sinon, MyView) {
	jasmine.describe('MyView', function() {
		var view, model
		jasmine.beforeEach(function() {
			model = new Backbone.Model();
			view = new MyView({model: model});
		});

		jasmine.it('should create a DIV element', function() {
			jasmine.expect(view.el.nodeName).toEqual("DIV");
		});
		// jasmine.it('should render the type', function() {
		// 	jasmine.expect(this.view.$('.type')).toHaveText(this.news.toJSON().type);
		// });
		// jasmine.it('should render the story', function() {
		// 	jasmine.expect(this.view.$('p:first')).toHaveText(this.news.toJSON().content);
		// });
		// jasmine.it('should render the author', function() {
		// 	var name = this.news.toJSON().author.first_name + ' ' + this.news.toJSON().author.last_name;
		// 	jasmine.expect(this.view.$('.inline_avatar')).toHaveText(name);
		// 	jasmine.expect(this.view.$('.inline_avatar img')).toHaveAttr('src', this.news.toJSON().author.avatar);
		// });
		// jasmine.it('should render the source', function() {
		// 	jasmine.expect(this.view.$('.meta a:last')).toHaveText(this.news.toJSON().source);
		// 	jasmine.expect(this.view.$('.meta a:last')).toHaveAttr('href', this.news.toJSON().source);
		// });
	});
});