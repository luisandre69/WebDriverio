beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us fomr WebdriverUni', function () {
    beforeEach(function () {
        console.log('Inside the describe block!');
    });
    it('Should be able to submit a successful submission via contact us form', function (done) {
        browser.setValue("[name='first_name']", 'Luis');
        browser.setValue("[name='last_name']", 'Abreu');
        browser.setValue("[name='email']", 'luis.abreu@cubestech.net');
        browser.setValue("[name='message']", 'Im the Automation man..');
        browser.click("[type = 'submit']");

        var successfulContactConfirmation = browser.isExisting('#contact_reply h1');
        expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.true;
        
        var successfulSubmission = browser.getText('#contact_reply h1');
        expect(successfulSubmission).to.equal('Thank You for your Message!');
    
    });

    it('Should not be able to submit a successful submission via contact us form as all field are required', function (done) {
        browser.setValue("[name='first_name']", 'Luis');
        browser.setValue("[name='last_name']", 'Abreu');
        browser.setValue("[name='email']", 'luis.abreu@luis.net');
        browser.click("[type = 'submit']");

        var successfulContactConfirmation = browser.isExisting('#contact_reply h1');
        expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.false;
    });

    it('Should not be able to submit a successfull submission via contact us form as all fields are required', function (done) {
        browser.setValue("[name='first_name']", 'test');
        browser.setValue("[name='email']", 'abreu@luis.net');
        browser.click("[type = 'submit']");

        var successfulContactConfirmation = browser.isExisting('#contact_reply h1');
        expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.false;
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        browser.setValue("[name='first_name']", 'tester');
        browser.setValue("[name='last_name']", '01');
        browser.click("[type = 'submit']");

        var errorText = browser.getText('body');
        expect(errorText).to.include('Error: all fields are required');

        var errorText = browser.isVisible('body');
        expect(errorText,'Error message is not visible').to.be.true;
    });
});