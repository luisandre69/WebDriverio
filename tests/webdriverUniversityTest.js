var assert = require('assert');

describe("Verify whether webdriveruniversity links on homepage work correctly", function () {
	it("check that the contact us button opens the contact us page", function (done) {
		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		browser.url('/')
		var title = browser.getTitle();
		assert.equal(title,'WebDriverUniversity.com');
		console.log('Title is: ' + title);
		browser.click("#contact-us")
		browser.pause(3000)
	});
	
	it("check that the login button opens the login portal page", function (done) {
		browser.url('/')
		browser.click('#login-portal')
		var title = browser.getTitle()
		assert.equal(title,'WebDriverUniversity.com');
		console.log('Title is: ' + title);
		browser.pause(3000)
	});
});
