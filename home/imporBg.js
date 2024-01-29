function handleMediaChange() {
  var mediaInput = document.getElementById("mediaInput");
  var liveDis = document.getElementById("live-display");
  var liveDisMin = document.getElementById("live-displaymini");

  var file = mediaInput.files[0];

  if (file) {
    var fileType = file.type.split("/")[0]; // 'image' or 'video'

    if (fileType === "image") {
      var reader = new FileReader();
      reader.onload = function (e) {
        liveDis.style.backgroundImage =
          "url('" + e.target.result + "')";
        liveDis.style.backgroundSize = "100% 100%";
        liveDis.style.backgroundRepeat = "no-repeat";
        liveDis.style.backgroundPosition = "center";
        liveDis.style.objectFit = "contain";
        var previousVideo = liveDis.querySelector("video");
        liveDis.removeChild(previousVideo);
      };
      reader.readAsDataURL(file);
    } else if (fileType === "video") {
      // If it's a video, create a video element and append it to the container
      var videoElement = document.createElement("video");
      videoElement.src = URL.createObjectURL(file);
      videoElement.autoplay = true;
      videoElement.loop = true;
      videoElement.muted = true;
      videoElement.style.width = "100%";
      videoElement.style.height = "100%";
      videoElement.style.objectFit = "cover";
      videoElement.style.position = "absolute";

        liveDis.appendChild(videoElement);
      

      isAppend = true;
    }
  }
}
