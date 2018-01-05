$('#mediaplayer').mediaelementplayer({
  defaultVideoWidth: "100%",
  defaultVideoHeight: "100%"
});

const video = document.querySelector('video');
const allSpan = document.querySelectorAll('span');

// HIGHLIGHT TRANSCRIPT TEXT

video.addEventListener('timeupdate', function () {
  for (let i = 0; i < allSpan.length; i += 1) {
    let startTime = allSpan[i].getAttribute('data-start');
    let endTime = allSpan[i].getAttribute('data-end');
    let currentTime = video.currentTime;
    if ( currentTime >= startTime && currentTime <= endTime) {
      allSpan[i].className = "active";
    } else {
      allSpan[i].className = "inactive";
    }
  }
});

// CLICK TO SET TIME IN VIDEO


function textClick (element) {
  element.addEventListener("click", function() {
     let newTime = element.getAttribute('data-start');
     if (element) {
      video.currentTime = newTime;
      video.play();
     }
 });
}

for (let i = 0; i < allSpan.length; i += 1) {
  let span = allSpan[i];
  textClick (span);
}