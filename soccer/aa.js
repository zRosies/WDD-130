const ba = document.getElementsByClassName("wwt")[0];

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 200) {
    ba.style.display = "none";
  } else {
    ba.style.display = "block";
    ba.style.transition= "2s ease-in-out";
  }
});