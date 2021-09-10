var arts = document.getElementsByClassName("album-info");
var i;

for (i = 0; i < arts.length; i++) {
	arts[i].addEventListener("click", function () {
		this.classList.toggle("active");
    if (this.style.opacity === "" || this.style.opacity === "0") {
      this.style.opacity = "90%";
    } 
		else {
      this.style.opacity = "0%";
    }
	});
}