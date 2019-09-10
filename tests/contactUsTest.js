var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(function () {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function () {
	it('Test1: Should be able to submit a successful submission via contact us form', function (done) {
		ContactUs_Page.submitAllInformationViaContactUsForm('joe', 'Blogs', 'joe_blogs123@outlook.com', 'How are you?');
	});

	it('Test1: Should be able to submit a successful submission via contact us form', function (done) {
		ContactUs_Page.submitAllInformationViaContactUsForm('michael', 'jones', 'michael_jones@outlook.com', 'How are you?');
	});

	it('Test1: Should be able to submit a successful submission via contact us form', function (done) {
		ContactUs_Page.submitAllInformationViaContactUsForm('Jolene', 'perry', 'Jolene_perry@outlook.com', 'How are you?');
	});


	it('Test2: Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
		ContactUs_Page.setFirstName('Mike');
		ContactUs_Page.setLastName('Woods');
		ContactUs_Page.setEmailAddress('mike_woods@mail.com');
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();
	});

	it('Test3: Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
		ContactUs_Page.setFirstName('Sarah');
		ContactUs_Page.setLastName('Jones');
		ContactUs_Page.setEmailAddress('Sarah_Jones@mail.com');
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();
	});



	it('Test3: Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
		ContactUs_Page.setFirstName('Sarah');
		ContactUs_Page.setEmailAddress('sarah_woods@mail.com');
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();
	});

	it('Test4: Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
		ContactUs_Page.setLastName('Jomes');
		ContactUs_Page.setEmailAddress('sarah_Jomes@mail.com');
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();
	});

	it('Test4: Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
		ContactUs_Page.setLastName('Tom');
		ContactUs_Page.setEmailAddress('Tom_Jomes@mail.com');
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();
	});

});