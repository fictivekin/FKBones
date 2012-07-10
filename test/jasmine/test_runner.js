require.config({
    baseUrl: "/js"
});
staticRoot = '';

define([
	'/spec/MyModelSpec.js',
	'/spec/MyCollectionSpec.js',
	'/spec/MyAppSpec.js'
], function() {
});
