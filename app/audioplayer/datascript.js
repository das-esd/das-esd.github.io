"use strict";
const urlParams = new URLSearchParams(window.location.search);
const tracksrc = urlParams.get("audio_url");
const tracktitle = urlParams.get("title");
const trackartist = urlParams.get("artist");
const trackthumb = urlParams.get("thumb");
const player = document.getElementById("audioplayer");
const title = document.getElementById("trtt");
const artist = document.getElementById("trat");
const thumb = document.getElementById("trth");
const bcthumb = document.getElementById("backfntrc");
player.setAttribute("data-src", tracksrc);
title.innerText = tracktitle;
artist.innerText = trackartist;
thumb.src = trackthumb;
bcthumb.src = trackthumb;
console.log(tracksrc, tracktitle, trackartist);
if (!tracksrc) {
  document.body.style.backgroundImage = "url('player-thumb.png')";
  document.getElementById("trckdesc").style.display = "none";
} else {
  document.title = tracktitle + " | " + trackartist;
  document.getElementById("trckdesc").style.display = "block";
}
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

document
  .getElementById("audioForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var audioUrl = document.getElementById("adurl").value;
    var thumbnailUrl = document.getElementById("adthumb").value;
    var title = document.getElementById("adtit").value;
    var artist = document.getElementById("adart").value;

    var baseUrl = "https://soubhikdas.in/app/audioplayer/";
    var url =
      baseUrl +
      "?audio_url=" +
      encodeURIComponent(audioUrl) +
      "&thumb=" +
      encodeURIComponent(thumbnailUrl) +
      "&title=" +
      encodeURIComponent(title) +
      "&artist=" +
      encodeURIComponent(artist);

    window.location.href = url;
  });

function GetCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}
var useru = GetCookie("_dfunc");
var crtaudlnk = document.getElementById("crtaudlnk");
if (crtaudlnk && useru != null) {
  crtaudlnk.addEventListener("click", function () {
    document.getElementById("crtlnkdv").style.display = "block";
  });
}

function changeBoxShadow() {
  const bubbles = document.querySelectorAll(".bubble");

  let hue = 0;

  setInterval(() => {
    hue = (hue + 10) % 360;

    bubbles.forEach((bubble) => {
      const color1 = `rgba(249, 65, 65, 0.2)`;
      const color2 = `rgb(${hue}, 12, 239)`;
      bubble.style.boxShadow = `0 30px 50px ${color1}, inset 0px 10px 30px 5px ${color2}`;
    });
  }, 1000);
}

changeBoxShadow();
