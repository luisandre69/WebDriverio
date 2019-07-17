class ContactUs_Page{
    get firstName() { return $("[name='first_name']");}
    get lastName() { return $("[name='last_name']");}
    get comments() { return $("textarea");}
    get emailAddress() { return $("[name='email']");}
    get submitButton() { return $("[type='submit']");}
    get successfulSubmissionHeader() { return $("#contact_reply h1");}
    get unsuccessfulSubmissionHeader() { return $("body");}
}

module.exports = new ContactUs_Page();