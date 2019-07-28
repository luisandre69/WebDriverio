var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function () {
    it('Should be able to submit a successful submission via contact us form', function (done) {
        setFirstName('joe');
        setLastName('Blogs');
        setEmailAddress('joe_blogs123@outlook.com');
        setComments('How are you?');
        clickSubmitButton();
        confirmSuccessfulSubmission();
    });


    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        setFirstName('Mike');
        setLastName('Woods');
        setEmailAddress('mike_woods@mail.com');
        clickSubmitButton();
        confirmUnsuccessfulSubmission();
    });


    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        setFirstName('Sarah');
        setEmailAddress('sarah_woods@mail.com');
        clickSubmitButton();
        confirmUnsuccessfulSubmission();
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        setLastName('Jomes');
        setEmailAddress('sarah_Jomes@mail.com');
        clickSubmitButton();
        confirmUnsuccessfulSubmission();
    });
});