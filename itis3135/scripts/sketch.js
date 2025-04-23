let audioPlayer;

function setup() {
  noCanvas();

  let container = createDiv();
  container.id('audio-center');
  
  audioPlayer = createAudio('/assets/piano-loop.mp3');
  audioPlayer.attribute(
    'aria-description',
    'The playback speed of this audio player is controlled by the position of the mouse. The further to the right the mouse is, the faster the audio will play.'
  );

  audioPlayer.showControls();

  audioPlayer.parent(container);
}

function draw() {
  audioPlayer.speed(1 + mouseX / windowWidth);
}
