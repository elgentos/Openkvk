jQuery(document).ready(function() {
	inputField = jQuery("input[name*=kvk]"); // which HTML input element contains the KVK number?
	inputField.live('blur',function () {
		var kvk = inputField.val();
		jQuery.getJSON('http://api.openkvk.nl/json/SELECT%20*%20FROM%20kvk%20WHERE%20kvks%20=%20'+kvk+'%20LIMIT%201', function(data) {
			info = data[0]['RESULT']['ROWS'].toString().split(",");

			fields = new Array("company","address","street1","postcode","city","country_id");

			var company = info[1];
			var street1 = info[4]; // Support for Magento's Core OnePage checkout address field
			var address = info[4]; // Support for OneStepCheckout address field
			var postcode = info[5];
			var city = info[6];
			var country_id = "NL"; // since KVK is Dutch, this will always be NL

			for(i=0;i<fields.length;i++) {
				field = fields[i];
				// Support for OneStepCheckout fields
				if(jQuery("div.input-"+field+" input").val()=="") {
					jQuery("div.input-"+field+" input").val(eval(field));
				}
				// Support for Magento's Core OnePage checkout
				if(jQuery("input[id=billing\:"+field+"]").val()=="") {
					jQuery("input[id=billing\:"+field+"]").val(eval(field));
				}
				jQuery("select[name=billing\["+field+"\]]").val(eval(field));
				$('billing\:country_id').simulate('change'); // simulate click to change state/province field
			}
		});
	});
});

/**
 * Event.simulate(@element, eventName[, options]) -> Element
 *
 * - @element: element to fire event on
 * - eventName: name of event to fire (only MouseEvents and HTMLEvents interfaces are supported)
 * - options: optional object to fine-tune event properties - pointerX, pointerY, ctrlKey, etc.
 *
 *    $('foo').simulate('click'); // => fires "click" event on an element with id=foo
 *
 **/
(function(){

var eventMatchers = {
	'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
	'MouseEvents': /^(?:click|mouse(?:down|up|over|move|out))$/
}
var defaultOptions = {
	pointerX: 0,
	pointerY: 0,
	button: 0,
	ctrlKey: false,
	altKey: false,
	shiftKey: false,
	metaKey: false,
	bubbles: true,
	cancelable: true
}

Event.simulate = function(element, eventName) {
	var options = Object.extend(defaultOptions, arguments[2] || { });
	var oEvent, eventType = null;

	element = $(element);

	for (var name in eventMatchers) {
	if (eventMatchers[name].test(eventName)) { eventType = name; break; }
	}

	if (!eventType)
	throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

	if (document.createEvent) {
	oEvent = document.createEvent(eventType);
	if (eventType == 'HTMLEvents') {
		oEvent.initEvent(eventName, options.bubbles, options.cancelable);
	}
	else {
		oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
		options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
		options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
	}
	element.dispatchEvent(oEvent);
	}
	else {
	options.clientX = options.pointerX;
	options.clientY = options.pointerY;
	oEvent = Object.extend(document.createEventObject(), options);
	element.fireEvent('on' + eventName, oEvent);
	}
	return element;
}

Element.addMethods({ simulate: Event.simulate });
})()