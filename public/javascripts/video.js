// Get video element
var video = document.getElementById('front__video');
// Get client width and height and calculate the new values within the proportion
// of the original video
function getClientSize() {
  var windowHeight = document.documentElement.clientHeight;
  var windowWidth = document.documentElement.clientWidth;
  var windowProportion = windowWidth / windowHeight;
  var origWidth = 1920;
  var origHeight = 1080;
  var origProportion = origWidth / origHeight;

  if (windowProportion >= origProportion) {
    proportion = windowWidth / origWidth;
  } else {
    proportion = windowHeight / origHeight;
  }
  console.log(proportion);
  var newWidth = proportion * origWidth;
  var newHeight = proportion * origHeight;
  return [newWidth, newHeight];
}

// Set width and height to the video element
video.style.width = getClientSize()[0] + 'px';
video.style.height = getClientSize()[1] + 'px';

// Add the video element inside the wrap

// Listen when the window is resized and change the width and height properly
window.addEventListener('resize',function(e) {
  var actualSize = getClientSize();
  video.style.width = actualSize[0] + 'px';
  video.style.height = actualSize[1] + 'px';
  console.log(actualSize);
});

// Loop the video
video.addEventListener('ended', function() {
      video.play();
});
