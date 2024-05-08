document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("background-video");
    var image = document.getElementById("background-image");

    video.addEventListener("loadeddata", function() {
        image.style.display = "none";
        video.style.zIndex = "1";
        video.play();
    });

    video.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });
});