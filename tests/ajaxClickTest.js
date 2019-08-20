describe('Test that the button is clickable once the Ajax loader complestes loading', function(){
    it.skip('Attempt to click the button asap', function(done){
        browser.url('/Ajax-Loader/index.html');
        browser.click('#button1234567890');
    });

    it('Attempt to click the button after 7 seconds', function(done){
        browser.url('/Ajax-Loader/index.html');
        this.timeout(20000);
        browser.pause(7000);
        browser.click('#button1');
        browser.pause(7000);
    });
});
