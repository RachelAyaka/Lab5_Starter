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

  // change the volume on the slider
  let scale = document.getElementById("volume");
  let soundImg = document.getElementById("volume-controls").querySelector("img");
  let changeSound = function() {
    if(scale.value == 0) {
      soundImg.src = "assets/icons/volume-level-0.svg";
    }
    else if(scale.value >= 1 && scale.value < 33) {
      soundImg.src = "assets/icons/volume-level-1.svg";
    }
    else if(scale.value >= 33 && scale.value < 67) {
      soundImg.src = "assets/icons/volume-level-2.svg";
    }
    else if(scale.value >= 67) {
      soundImg.src = "assets/icons/volume-level-3.svg";
    } 
    audio.volume = (scale.value / 100.0);
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
  scale.addEventListener('soundChange', changeSound);
  button.addEventListener('click', play);
}

init();