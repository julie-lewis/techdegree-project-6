$('#mediaplayer').mediaelementplayer({
  defaultVideoWidth: "100%",
  defaultVideoHeight: "100%"
});

const video = document.querySelector('video');
const textSpan = document.querySelectorAll('.transcript-wrap span');

// HIGHLIGHT TRANSCRIPT TEXT

video.addEventListener('timeupdate', function () {
  for (let i = 0; i < textSpan.length; i += 1) {
    let startTime = textSpan[i].getAttribute('data-start');
    let endTime = textSpan[i].getAttribute('data-end');
    let currentTime = video.currentTime;
    if ( currentTime >= startTime && currentTime <= endTime) {
      textSpan[i].className = "active";
    } else {
      textSpan[i].className = "inactive";
    }
  }
});

// CLICK TO SET TIME IN VIDEO


function textClick (span) {
  span.addEventListener("click", function() {
     let newTime = span.getAttribute('data-start');
     if (span) {
      video.currentTime = newTime;
      video.play();
     }
 });
}

for (let i = 0; i < textSpan.length; i += 1) {
  let span = textSpan[i];
  textClick (span);
}