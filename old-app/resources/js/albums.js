var songs = document.getElementsByClassName("songs-and-times");

var i;

for (i = 0; i < songs.length; i++) {
  if (songs[i].getAttribute("unreleased") != null) continue;
  songs[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}