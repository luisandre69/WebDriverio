var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(async () => {
	await browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', () => {
	it('Test1: Should be able to submit a successful submission via contact us form', () => {
		ContactUs_Page.submitAllInformationViaContactUsForm('joe', 'Blogs', 'joe_blogs123@outlook.com', 'How are you?');
		ContactUs_Page.successfulSubmissionHeader.waitForDisplayed(3000);
		try {
			expect(ContactUs_Page.successfulSubmissionHeaderText).to.equal("Thank You for your Message!");
		} catch (err) {
			console.log("Exception: " + err);
			assert.fail();
		}
	});

	it('Test2: Should not be able to submit a successful submission via contact us form as all fields are required', () => {
		ContactUs_Page.setLastName('Tom');
		ContactUs_Page.setEmailAddress('Tom_Jomes@mail.com');
		ContactUs_Page.clickSubmitButton();
		try {
			expect(ContactUs_Page.unsuccessfulSubmissionHeaderText).to.have.string("Error: all fields are required");
		} catch (err) {
			console.log("Exception: " + err);
			assert.fail();
		}
	});
});