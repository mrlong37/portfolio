function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

  const music = document.getElementById("bg-music");
  let isPlaying = false;

  function toggleMusic() {
    if (isPlaying) {
      music.play();
    } else {
      music.pause();
    }
    isPlaying = !isPlaying;
  }