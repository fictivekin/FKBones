define([
	'libs/backbone'
], function(Backbone){
	var MyModel = Backbone.Model.extend({
		setName: function(name) {
			this.set({name: name});
		},
		getName: function() {
			return this.get('name');
		}
	});
	return MyModel;
});
