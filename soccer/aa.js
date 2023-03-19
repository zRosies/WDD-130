var wwt = document.querySelector(".wwt");
var wwtPos = wwt.offsetTop;
var wwtHeight = wwt.offsetHeight;
var windowHeight = window.innerHeight;

window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset;
    if (scrollTop > wwtPos - windowHeight + wwtHeight / 2) {
        var distance = scrollTop - (wwtPos - windowHeight + wwtHeight / 2);
        var offset = distance / 10;
        if (offset <= wwt.offsetWidth) {
            wwt.style.left = offset + "%";
        }
    }
});