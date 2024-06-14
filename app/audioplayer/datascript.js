"use strict";
document.addEventListener("DOMContentLoaded", function () {
  let isResized = false;
  let isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
  let prevDocumentWidth = document.documentElement.clientWidth;

  if (window.self === window.top) {
    window.addEventListener("resize", function () {
      isResized = true;
    });

    setInterval(function () {
      if (isResized && !isMobileDevice) {
        let currentDocumentWidth = document.documentElement.clientWidth;
        let widthDifference = Math.abs(
          currentDocumentWidth - prevDocumentWidth
        );
        if (
          (widthDifference >= 10 && widthDifference <= 60) ||
          widthDifference > 500
        ) {
          console.log(
            "Document width changed by " +
              widthDifference +
              " pixels and resize button is not clicked."
          );
          alert("Developer mode detected!");
        }
      }
    }, 50);
  }
});

const urlParams = new URLSearchParams(window.location.search);
var tracksrc = urlParams.get("audio_url");
var tracktitle = urlParams.get("title");
var trackartist = urlParams.get("artist");
var trackthumb = urlParams.get("thumb");
const player = document.getElementById("audioplayer");
const title = document.getElementById("trtt");
const artist = document.getElementById("trat");
const thumb = document.getElementById("trth");
const bcthumb = document.getElementById("backfntrc");
const dsmusic = urlParams.get("_DSonicMusic");

if (dsmusic && dsmusic !== "") {
  var trackelm = dsmusic.split("::");
  var tracktitle = fromUrlFriendly(trackelm[0]);
  var tracksrc = window.atob(trackelm[1]);
  var trackthumb = window.atob(trackelm[2]);
  var trackartist = window.atob(trackelm[3]);
  document.getElementById("chartcon").style.visibility = "visible";
  document.getElementById("shwdstrck").style.pointerEvents = "auto";
}

player.setAttribute("src", tracksrc);
title.innerText = tracktitle;
artist.innerText = trackartist;
thumb.src = trackthumb;
bcthumb.src = trackthumb;

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
    var trklnk = document.getElementById("adpllnk");
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
    trklnk.value = url;
    trklnk.style.display = "block";
  });

function createdsmlink() {
  var audioUrl = document.getElementById("adurl").value;
  var thumbnailUrl = document.getElementById("adthumb").value;
  var title = document.getElementById("adtit").value;
  var artist = document.getElementById("adart").value;
  var trklnk = document.getElementById("adpllnk");
  let Title = toUrlFriendly(title);
  function ervl(val) {
    val = window.btoa(val);
    return val;
  }
  if (audioUrl != "" || thumbnailUrl != "" || title != "" || artist != "") {
    var baseUrl = "https://soubhikdas.in/app/audioplayer/";
    var erval =
      Title +
      "::" +
      ervl(audioUrl) +
      "::" +
      ervl(thumbnailUrl) +
      "::" +
      ervl(artist) +
      "::";
    var url = baseUrl + "?_DSonicMusic=" + erval;

    trklnk.value = url;
    trklnk.style.display = "block";
  }
}

function toUrlFriendly(str) {
  let urlFriendlyStr = str.replace(/\s+/g, "-");
  return urlFriendlyStr;
}
function fromUrlFriendly(str) {
  let normalStr = str.replace(/-/g, " ");
  return normalStr;
}

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
var userds = GetCookie("_dsmuse");
var crtaudlnk = document.getElementById("crtaudlnk");
if (useru === null && userds === null) {
  reqtokendsms();
  player.setAttribute("src", "#");
}
if (crtaudlnk && useru != null) {
  crtaudlnk.style.display = "inline-block";
  crtaudlnk.addEventListener("click", function () {
    document.getElementById("crtlnkdv").style.display = "block";
  });
}

function reqtokendsms() {
  var newDiv = document.createElement("div");
  newDiv.classList.add("req-token");
  var form = document.createElement("form");
  form.innerHTML = `
      <div class="form-container">
        <span>🔔</span><button type="button" onclick="window.open('mailto:d.soubhik@outlook.com')">Request Access</button><br>
        <p>Send mail: D.SOUBHIK@OUTLOOK.COM</p>
      </div>
    `;

  newDiv.appendChild(form);
  document.body.appendChild(newDiv);
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

function copyToClipboard() {
  var copyText = document.getElementById("adpllnk");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value).then(
    function () {
      var notification = document.createElement("div");
      notification.textContent = "Copied to clipboard!";
      notification.style.position = "fixed";
      notification.style.bottom = "7vh";
      notification.style.left = "50%";
      notification.style.transform = "translateX(-50%)";
      notification.style.color = "white";
      notification.style.padding = "10px";
      notification.style.borderRadius = "5px";
      notification.style.zIndex = "1000";
      notification.style.fontFamily = "Courier New";
      notification.style.fontSize = "14px";
      document.body.appendChild(notification);

      setTimeout(function () {
        document.body.removeChild(notification);
      }, 5000);
    },
    function () {
      console.error("Failed to copy text to clipboard");
    }
  );
}

document.addEventListener("keydown", function (event) {
  if (
    event.key === "F12" ||
    (event.ctrlKey &&
      event.shiftKey &&
      (event.key === "I" || event.key === "C")) ||
    (event.ctrlKey && event.key === "U")
  ) {
    event.preventDefault();
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const tracksContainer = document.getElementById("tracks-container");

  function createTrackDiv(track) {
    const trackDiv = document.createElement("div");
    trackDiv.classList.add("track");

    const thumbnail = document.createElement("img");
    thumbnail.src = "/app/audioplayer/dsmlogo.jpg";

    const trackInfo = document.createElement("div");
    trackInfo.classList.add("track-info");

    const title = document.createElement("p");
    title.textContent = track.title;

    const playbtn = document.createElement("button");
    playbtn.innerHTML = "Play ▶️";
    playbtn.classList.add("track-play");

    trackInfo.appendChild(title);
    trackInfo.appendChild(playbtn);
    trackDiv.appendChild(thumbnail);
    trackDiv.appendChild(trackInfo);

    playbtn.addEventListener("click", () => {
      window.open(track.src, "_self");
    });

    return trackDiv;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  fetch("/audios/files/audio/dsmusic/chart.json")
    .then((response) => response.json())
    .then((data) => {
      shuffleArray(data);
      data.forEach((track) => {
        const trackDiv = createTrackDiv(track);
        tracksContainer.appendChild(trackDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching or parsing JSON:", error);
    });
});

const tglelm = document.getElementById("chartcon");
var trckdescDiv = document.getElementById("trckdesc");

document.getElementById("shwdstrck").addEventListener("click", function () {
  if (tglelm.style.display === "block") {
    tglelm.style.display = "none";
    trckdescDiv.style.width = "100%";
  } else {
    tglelm.style.display = "block";
    var currentWidth = parseFloat(getComputedStyle(trckdescDiv).width);
    var parentWidth = parseFloat(
      getComputedStyle(trckdescDiv.parentNode).width
    );
    var currentWidthPercent = (currentWidth / parentWidth) * 100;

    if (window.innerWidth > 500) {
      var newWidthPercent = Math.max(currentWidthPercent - 30, 0);
      trckdescDiv.style.width = newWidthPercent + "%";
    }
  }
});
document.getElementById("shrlnkds").addEventListener("click", copyshrlnk);

function copyshrlnk() {
  var copyText = window.location.href;

  var tempInput = document.createElement("input");
  tempInput.style.display = "none";
  tempInput.value = copyText;
  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(tempInput.value).then(
    function () {
      document.body.removeChild(tempInput);

      var notification = document.createElement("div");
      notification.textContent = "Link Copied!";
      notification.style.position = "fixed";
      notification.style.bottom = "7vh";
      notification.style.left = "50%";
      notification.style.transform = "translateX(-50%)";
      notification.style.backgroundColor = "black";
      notification.style.color = "white";
      notification.style.padding = "10px";
      notification.style.borderRadius = "0px";
      notification.style.zIndex = "1000";
      notification.style.fontFamily = "Courier New";
      notification.style.fontSize = "14px";
      document.body.appendChild(notification);

      setTimeout(function () {
        document.body.removeChild(notification);
      }, 5000);
    },
    function () {
      console.error("Failed to copy text to clipboard");
    }
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const errorImage = "/assets/img/image-error.png";
  document.body.addEventListener(
    "error",
    (event) => {
      const target = event.target;
      if (target.tagName === "IMG") {
        target.src = errorImage;
      }
    },
    true
  );
});
setInterval(function () {
  console.clear();
}, 100);
