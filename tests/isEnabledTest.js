beforeEach(function() {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
  browser.setViewportSize({
		width: 1200,
		height: 800
	})
	browser.pause(2000);
})

describe('Test Enabled Dropdown Menus, Checkboxes & Radio Buttons', function() {
  it('Dropdown item orange is disabled therefore should return false', function(done) {
    var isEnabled = browser.isEnabled("option[value='orange']");
    console.log(isEnabled);
    expect(isEnabled).to.equal(false);
  });
  
  it('Dropdown item grape is enabled therefore should return true', function(done) {
    var isEnabled = browser.isEnabled("option[value='grape']");
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });
  
  it('Option2 is enabled therefore should return true', function(done) {
    var isEnabled = browser.isEnabled("input[value='option-2']");
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });
  
  it('Radio button pumpkin is enabled therefore should be true', function(done) {
    var isEnabled = browser.isEnabled("input[value='pumpkin']");
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });
  
  it('Radio button cabbage is disabled therefore should be false', function(done) {
    var isEnabled = browser.isEnabled("input[value='cabbage']");
    console.log(isEnabled);
    expect(isEnabled).to.equal(false);
  });
});