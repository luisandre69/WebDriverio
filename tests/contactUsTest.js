var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {
  it('Should be able to submit a successful submission via contact us form', function(done) {
  	ContactUs_Page.submitAllInformationViaContactUsForm('joe', 'Blogs', 'joe_blogs123@outlook.com', 'How are you?');
  });


  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	ContactUs_Page.setFirstName('Mike');
  	ContactUs_Page.setLastName('Woods');
  	ContactUs_Page.setEmailAddress('mike_woods@mail.com');
  	ContactUs_Page.clickSubmitButton();
  	ContactUs_Page.confirmUnsuccessfulSubmission();
  });

  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	ContactUs_Page.setFirstName('Sarah');
  	ContactUs_Page.setEmailAddress('sarah_woods@mail.com');
  	ContactUs_Page.clickSubmitButton();
  	ContactUs_Page.confirmUnsuccessfulSubmission();
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	ContactUs_Page.setLastName('Jomes');
  	ContactUs_Page.setEmailAddress('sarah_Jomes@mail.com');
  	ContactUs_Page.clickSubmitButton();
  	ContactUs_Page.confirmUnsuccessfulSubmission();
  });
});