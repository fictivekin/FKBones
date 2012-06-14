define(['libs/jquery', 'libs/ujs'], function($) {
	$('[data-toggle-class]').live('click', function() {
		var className = $(this).data('toggle-class');
		var target = $(this).data('target');
		$(target).toggleClass(className);

		var focus = $(this).data('focus');
		if (focus) {
			$(focus).focus();
		}
		return false;
	});
	$('[data-spinner-target]').live({
		'ajax:beforeSend': function() {
			var target = $(this).data('spinner-target');
			$(this).closest(target).addClass('spinner');
		},
		'ajax:complete': function() {
			var target = $(this).data('spinner-target');
			$(this).closest(target).removeClass('spinner');
		}
	});
});