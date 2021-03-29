/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ndf-ecp\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ndf-day': '&#xe904;',
		'ndf-ellipse': '&#xe907;',
		'ndf-close': '&#xe90c;',
		'ndf-hours-support': '&#xe90e;',
		'ndf-arrow-left': '&#xe90f;',
		'ndf-arrow-right': '&#xe910;',
		'ndf-blog': '&#xe911;',
		'ndf-phone': '&#xe912;',
		'ndf-cart-solid': '&#xe913;',
		'ndf-cart': '&#xe914;',
		'ndf-cart-check': '&#xe915;',
		'ndf-fast-printing': '&#xe916;',
		'ndf-Frame-1241': '&#xe917;',
		'ndf-link': '&#xe918;',
		'ndf-live-chat': '&#xe919;',
		'ndf-menu': '&#xe91a;',
		'ndf-my-account': '&#xe91b;',
		'ndf-new-big': '&#xe91c;',
		'ndf-new': '&#xe91d;',
		'ndf-next-day-printing': '&#xe91e;',
		'ndf-on-time-guarantee': '&#xe91f;',
		'ndf-on-time-guarantee-1': '&#xe920;',
		'ndf-on-time': '&#xe921;',
		'ndf-pause': '&#xe922;',
		'ndf-prepress': '&#xe923;',
		'ndf-quality-assurance': '&#xe925;',
		'ndf-recent-viewed': '&#xe926;',
		'ndf-recently-viewed-1': '&#xe927;',
		'ndf-review-proof': '&#xe928;',
		'ndf-same-day-printing': '&#xe929;',
		'ndf-search': '&#xe92a;',
		'ndf-shipping': '&#xe92b;',
		'ndf-step-connector': '&#xe92c;',
		'ndf-tooltip': '&#xe92d;',
		'ndf-upload-file': '&#xe92e;',
		'ndf-upload-to-cloud': '&#xe92f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ndf-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
