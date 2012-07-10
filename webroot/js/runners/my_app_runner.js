require.config({
	baseUrl: "js"
});

define([
	'apps/my_app',
	'util/dispatcher'
], function(MyApp, Dispatcher) {
	var app = new MyApp({el: document.body});
	Dispatcher.bind('my_view:click', app.clickHandler, app);
});
