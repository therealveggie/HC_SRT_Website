function msieversion() {

	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");
	
	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		if ( ! Modernizr.objectfit ) {
			$('.site-header').each(function () {
				var $container = $(this),
					imgUrl = $container.find('img').prop('src');
				if (imgUrl) {
					$container
						.css('backgroundImage', 'url(' + imgUrl + ')')
						.addClass('compat-object-fit');
				}
			});
		}
	}
	return false;
} // End
$(document).ready(msieversion);