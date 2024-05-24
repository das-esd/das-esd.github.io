let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;
let isRepeating = false;
// Create new audio element
let curr_track = document.createElement("audio");
let repeat_btn = document.querySelector(".repeat-track");
// Define the tracks that have to be played
let track_list = [
  {
    name: "Inside Mirror",
    artist: "Es D (Soubhik Das)",
    image: "/audios/files/image/record_thumb.png",
    path: "/audios/files/audio/record/Inside mirror.m4a",
  },
  {
    name: "মহাবীর (Great Warrior)",
    artist: "Es D (Soubhik Das)",
    image: "/audios/files/image/record_thumb.png",
    path: "/audios/files/audio/record/Mohabir.m4a",
  },
  {
    name: "বোধোদয় (Bodho-doi)",
    artist: "Es D (Soubhik Das)",
    image: "/audios/files/image/record_thumb.png",
    path: "/audios/files/audio/record/Bodhodoi.m4a",
  },
  {
    name: "Sane Insane",
    artist: "Es D (Soubhik Das)",
    image: "/audios/files/image/record_thumb.png",
    path: "/audios/files/audio/record/Sane Insane.m4a",
  },
  {
    name: "Rang de Sawariya",
    artist: "Es D (Soubhik Das)",
    image: "/audios/files/image/record_thumb.png",
    path: "/audios/files/audio/record/Rang de Sawariya.m4a",
  },
  {
    name: "Bhikhari (The Beggar)",
    artist: "Es D (Soubhik Das)",
    image: "/audios/files/image/record_thumb.png",
    path: "/audios/files/audio/record/Bhikhari.m4a",
  },
  {
    name: "Obosese (At last)",
    artist: "Es D (Soubhik Das)",
    image: "/audios/files/image/record_thumb.png",
    path: "/audios/files/audio/record/Obosese.m4a",
  },
  {
    name: "Savanna Ghana Barsat",
    artist: "Es D (Soubhik Das)",
    image: "/audios/files/image/record_thumb.png",
    path: "/audios/files/audio/record/Savanna Ghana Barsat.m4a",
  },
  {
    name: "Fokirer sojja",
    artist: "Es D (Soubhik Das)",
    image: "/audios/files/image/record_thumb.png",
    path: "/audios/files/audio/record/Fokirer sojja.m4a",
  },
  {
    name: "Kali - মনে কালী",
    artist: "Es D (Soubhik Das)",
    image: "/audios/files/image/record_thumb.png",
    path: "/audios/files/audio/record/Kali - মনে কালী.wav",
  },
  {
    name: "নতুন আলোর সন্ধান (New light)",
    artist: "Es D (Soubhik Das)",
    image: "/audios/files/image/record_thumb.png",
    path: "/audios/files/audio/record/নতুন আলোর সন্ধান (New light).mp3",
  },
  {
    name: "Bodhuya - বধুয়া",
    artist: "Es D (Soubhik Das) & Sounds of Isha",
    image: "/audios/files/image/record_thumb.png",
    path: "/audios/files/audio/record/Bodhuya - বধুয়া.mp3",
  },
  {
    name: "This is life",
    artist: "Es D (Soubhik Das)",
    image: "/audios/files/image/record_thumb.png",
    path: "/audios/files/audio/record/This is life.m4a",
  },
];

function random_bg_color() {
  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage =
    "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
    "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.removeEventListener("ended", nextOrRepeatTrack); // Ensure no duplicate listeners
  curr_track.addEventListener("ended", nextOrRepeatTrack);
  random_bg_color();
}
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  if (track_index < track_list.length - 1) track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0) track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function repeatTrack() {
  isRepeating = !isRepeating;
  repeat_btn.classList.toggle("active", isRepeating);
}

function nextOrRepeatTrack() {
  if (isRepeating) {
    loadTrack(track_index);
    playTrack();
  } else {
    nextTrack();
  }
}

function shuffleTrack() {
  let newTrackIndex;
  do {
    newTrackIndex = Math.floor(Math.random() * track_list.length);
  } while (newTrackIndex === track_index);

  track_index = newTrackIndex;
  loadTrack(track_index);
  playTrack();
}

document.querySelector(".suffle-track").addEventListener("click", shuffleTrack);
document.querySelector(".repeat-track").addEventListener("click", repeatTrack);
function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

function createPlaylist() {
  const playlistDiv = document.getElementById("myplaylist");
  track_list.forEach((track, index) => {
    const trackElement = document.createElement("div");
    trackElement.className = "playlist-item";
    trackElement.onclick = () => {
      loadTrack(index);
      playTrack();
    };
    const trackImage = document.createElement("img");
    trackImage.src = track.image;
    trackImage.alt = track.name;

    const trackDetails = document.createElement("div");

    const trackName = document.createElement("div");
    trackName.textContent = track.name;
    trackName.className = "trackName";

    const trackArtist = document.createElement("div");
    trackArtist.textContent = track.artist;
    trackArtist.className = "trackArtist";

    trackDetails.appendChild(trackName);
    trackDetails.appendChild(trackArtist);

    trackElement.appendChild(trackImage);
    trackElement.appendChild(trackDetails);

    playlistDiv.appendChild(trackElement);
  });
}

window.onload = createPlaylist;

function sharethis() {
  const currentTrack = track_list[track_index];
  const shareURL = `https://soubhikdas.in/audios/?record_studio=${currentTrack.name.replace(
    /\s+/g,
    "-"
  )}`;

  navigator.clipboard
    .writeText(shareURL)
    .then(() => {
      const notishrDiv = document.querySelector("#notishr");
      notishrDiv.innerHTML = "Link Copied!";
      notishrDiv.style.display = "block";
      setTimeout(() => {
        notishrDiv.style.display = "none";
      }, 3000);
    })
    .catch((err) => {
      console.error("Failed to copy URL to clipboard:", err);
    });
}

const urlParams = new URLSearchParams(window.location.search);
const requestedTrackName = urlParams.get("record_studio");
const requestedTrackIndex = track_list.findIndex(
  (track) => track.name.replace(/\s+/g, "-") === requestedTrackName
);
console.log(requestedTrackIndex);
if (requestedTrackIndex !== -1) {
  loadTrack(requestedTrackIndex);
} else {
  console.log("Track not found");
}
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

const listicon = document.getElementById("listicon");
const listdiv = document.getElementById("playlist");
const player = document.getElementById("player");

listicon.addEventListener("click", toggleplaylist);

const screenWidth = window.innerWidth;

function toggleplaylist() {
  if (listdiv.style.display === "block") {
    listdiv.style.width = "0%";
    player.style.width = "100%";
    listicon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-layout-wtf" viewBox="0 0 16 16"> <path d="M5 1v8H1V1zM1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm13 2v5H9V2zM9 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 13v2H3v-2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm12-1v2H9v-2zm-6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"/> </svg>`;
    listdiv.style.display = "none";
  } else {
    listicon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-layout-text-sidebar" viewBox="0 0 16 16" > <path d="M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" /> <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9z" /></svg > <span class='aptitle'>D's Record Studio</span>`;
    listdiv.style.display = "block";
    if (screenWidth <= 767) {
      listdiv.style.width = "100%";
    } else if (screenWidth >= 768 && screenWidth <= 1024) {
      listdiv.style.width = "40%";
      player.style.width = "60%";
    } else {
      listdiv.style.width = "30%";
      player.style.width = "70%";
    }
  }
}
