beforeEach(function() {
	browser.url("https://www.w3schools.com/html/html5_video.asp");
})

//Injects a snippet of JavaScript into the page for execution in the context of the currently selected frame.
browser.addCommand('isVideoPaused', function(){
	var isPaused = browser.execute(function(){
        console.log('Outputted inside the console window');

        var video = document.querySelector('#video1');
        return video.paused;
    })
    return isPaused.value;
});

describe('Video test', function() {
	it('Validate that the video is paused when accessing the page', function(done) {

	});

	it('Alter the width of the video', function(done) {

	});
});
