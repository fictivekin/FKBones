define([
	'libs/underscore',
	'/lib/jasmine-1.2.0/jasmine.js',
	'/lib/jasmine-1.2.0/jasmine-html.js',
	'/lib/jasmine-jquery.js'
], function(_, jasmine) {
	var jasmineEnv = jasmine.jasmine.getEnv();

	jasmineEnv.updateInterval = 1000;

	var htmlReporter = new jasmine.HtmlReporter();

	jasmineEnv.addReporter(htmlReporter);

	jasmineEnv.specFilter = function(spec) {
		return htmlReporter.specFilter(spec);
	};

	function execJasmine() {
		jasmineEnv.execute();
	}

	window.onload = execJasmine;

	return jasmine;
});
