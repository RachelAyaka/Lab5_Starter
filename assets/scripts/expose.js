// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // change image
  let image = document.querySelector('img');
  let select = document.getElementById('horn-select');
  let audio = document.getElementsByClassName("hidden")[0];

  //correct image and audio
  let changeImg = function() {
    if (select.value == 'air-horn') {
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
      
    } else if (select.value == 'car-horn') {
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } else if (select.value == 'party-horn') {
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";

    }
  }
  // play audio out loud
  audio.volume = 0.5;
  let button = document.querySelector('button');
  let play = function() {
    audio.play();
    if (select.value == 'party-horn') {
      const jsConfetti = new JSConfetti()

      jsConfetti.addConfetti()
    }
  }
  select.addEventListener('change', changeImg);
  button.addEventListener('click', play);
}

init();