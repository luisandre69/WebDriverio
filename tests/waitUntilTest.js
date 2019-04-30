beforeEach(function() {
	browser.url("/Accordion/index.html");
})

describe('Validate the loading functionality works correctly', function() {
	it('Verify relevant text LOADING COMPLETE appears after a period of time', function () {
		this.timeout(20000);
		browser.waitUntil(function () {
			console.log(browser.getText('#hidden-text'));
			return browser.getText('#hidden-text') === 'LOADING COMPLETE.'
		}, 12000, 'expected text to be different!');
	});
});