require.config({
    baseUrl: "/js"
});
staticRoot = '';

define([
	'/spec/MyModelSpec.js',
	'/spec/MyCollectionSpec.js',
	'/spec/MyViewSpec.js',
	'/spec/MyAppSpec.js'
], function() {
});
