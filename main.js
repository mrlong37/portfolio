/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//let aboutme = document.querySelector("#aboutme");
//let about = document.querySelector("#about");
//aboutme.addEventListener('click', function(){
// about.scrollIntoView();
//});

//function scrollToSection() {
 // const element = document.getElementById("about");
 // element.scrollIntoView({ behavior: "smooth" });
//}




let f1 = document.querySelector(".fish1");
let f2 = document.querySelector(".fish2");
let f3 = document.querySelector(".fish3");
let f4 = document.querySelector(".fish4");
let f5 = document.querySelector(".fish5");

f4.addEventListener('click', function(){
document.querySelector(".bio").style.display="block";
document.querySelector(".instruct").style.display="none";
document.querySelector(".hobbies").style.display="none";
document.querySelector(".future").style.display="none";
document.querySelector(".experience").style.display="none";
document.querySelector(".academics").style.display="none";
});

f2.addEventListener('click', function(){
document.querySelector(".bio").style.display="none";
document.querySelector(".instruct").style.display="none";
document.querySelector(".hobbies").style.display="block";
document.querySelector(".future").style.display="none";
document.querySelector(".experience").style.display="none";
document.querySelector(".academics").style.display="none";
});

f3.addEventListener('click', function(){
document.querySelector(".bio").style.display="none";
document.querySelector(".instruct").style.display="none";
document.querySelector(".hobbies").style.display="none";
document.querySelector(".future").style.display="block";
document.querySelector(".experience").style.display="none";
document.querySelector(".academics").style.display="none";
});

f1.addEventListener('click', function(){
document.querySelector(".bio").style.display="none";
document.querySelector(".instruct").style.display="none";
document.querySelector(".hobbies").style.display="none";
document.querySelector(".future").style.display="none";
document.querySelector(".experience").style.display="block";
document.querySelector(".academics").style.display="none";
});

f5.addEventListener('click', function(){
document.querySelector(".bio").style.display="none";
document.querySelector(".instruct").style.display="none";
document.querySelector(".hobbies").style.display="none";
document.querySelector(".future").style.display="none";
document.querySelector(".experience").style.display="none";
document.querySelector(".academics").style.display="block";
});


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