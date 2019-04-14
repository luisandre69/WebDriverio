beforeEach(function() {
	browser.url("Hidden-Elements/index.html");
})

describe('Test whether specific elements are visible within viewport', function() {

	it('should resize the current viewport', function () {
		  browser.setViewportSize({
				width: 1200,
				height: 800
			})
			browser.pause(2000);

			var windowSize = browser.windowHandleSize();
			console.log(windowSize.value);
		});

	it('should detect if an element is visible', function () {
		var isVisibleWithinViewport = browser.isVisibleWithinViewport("#not-displayed");
		console.log(isVisibleWithinViewport); //false

		var isVisibleWithinViewport = browser.isVisibleWithinViewport("#visibility-hidden");
		console.log(isVisibleWithinViewport); //false

		var isVisibleWithinViewport = browser.isVisibleWithinViewport("#zero-opacity");
		console.log(isVisibleWithinViewport); //false

		var isVisibleWithinViewport = browser.isVisibleWithinViewport("h1");
		console.log(isVisibleWithinViewport); //true

		var width = browser.getViewportSize("width");
		console.log(width);

		var height = browser.getViewportSize("height");
		console.log(height);
	});
});