const audio = document.getElementById("radioStream");
const playBtn = document.getElementById("playBtn");

let playing = false;

playBtn.addEventListener("click", () => {

  if (!playing) {
    audio.play();
    playBtn.innerText = "⏸ Pause";
    playing = true;
  } else {
    audio.pause();
    playBtn.innerText = "▶ Play";
    playing = false;
  }

});