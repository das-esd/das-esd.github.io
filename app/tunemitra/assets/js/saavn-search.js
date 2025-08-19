let audioContext;
let sourceNode;
let reverbNode;
let slowedReverbEnabled = false;
let lastSearch = "";
if (window.top !== window.self) {
  const allowedHost = "soubhikdas.in";
  const refHost = document.referrer ? new URL(document.referrer).hostname : "";

  if (refHost !== allowedHost) {
    document.body.innerHTML = `
        <div style="padding:20px; margin-top:35vh;font-family:sans-serif; text-align:center;">
          <h2 style="color:#ddd; margin-bottom:10px;">Embedding not allowed 😔</h2>
          <p style="font-size:14px; color:#444; line-height:1.5;">
            This page uses <b>JioSaavn API</b> and is provided strictly for
            <u>educational purposes only</u>. Unauthorized embedding or usage is not permitted.
          </p>
        </div>
      `;
  }
}
document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    SaavnSearch();
  });

function handleSearchQueryClick(query) {
  document.querySelector("#saavn-search-box").value = query;
  SaavnSearch();
}

document.querySelectorAll(".search-query-button").forEach((button) => {
  button.addEventListener("click", function () {
    handleSearchQueryClick(this.textContent);
  });
});

var results_container = document.querySelector("#saavn-results");
var results_objects = {};
const searchUrl = "https://jiosaavn-api-private.amrit-corp.com/search?q=";
var currentlyPlayingAudio = null;

function SaavnSearch() {
  var query = document.querySelector("#saavn-search-box").value.trim();
  query = encodeURIComponent(query);

  if (query.length > 0) {
    window.location.hash = query;
    doSaavnSearch(query);
  }
}

var page_index = 1;
function nextPage() {
  var query = document.querySelector("#saavn-search-box").value.trim();
  if (!query) {
    query = lastSearch;
  }
  query = encodeURIComponent(query);
  doSaavnSearch(query, 0, true);
}

async function doSaavnSearch(query, NotScroll, page) {
  document.getElementById("loadmore").textContent = "Loading..";
  window.location.hash = query;
  document.querySelector("#saavn-search-box").value = decodeURIComponent(query);
  if (!query) {
    return 0;
  }
  if (!page) {
    results_container.innerHTML = `<div class="loader col-span-full text-center">Searching...</div>`;
  }

  query = query + "&limit=20";
  if (page) {
    page_index = page_index + 1;
    query = query + "&page=" + page_index;
  } else {
    query = query + "&page=1";
    page_index = 1;
    results_container.innerHTML = "";
  }

  try {
    var response = await fetch(searchUrl + query);
    var json = await response.json();
    if (response.status !== 200) {
      document.getElementById("loadmore").textContent = "ERROR!";
      throw new Error(json.message || "Unknown error occurred");
    }
    var results = json.data.results;
    for (let i = results.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [results[i], results[j]] = [results[j], results[i]];
    }
    if (!results || results.length === 0) {
      document.getElementById("loadmore").textContent = "OPPS!";
      results_container.innerHTML =
        "<p class='col-span-full text-center'> No results found. Try another search term. </p>";
      return;
    }
    lastSearch = decodeURI(window.location.hash.substring(1));
    displayResults(results);
  } catch (error) {
    document.getElementById("loadmore").textContent = "ERROR!";
    results_container.innerHTML = `<div class="error col-span-full text-center">Error: ${error.message} <br> Check if you are connected to the internet </div>`;
    console.error(error);
  }

  // if (!NotScroll) {
  //   document
  //     .getElementById("saavn-results")
  //     .scrollIntoView({ behavior: "smooth" });
  // }
}

function displayResults(results) {
  document.getElementById("loadmore").textContent = "Load More";
  let resultsHTML = "";
  for (let track of results) {
    let song_name = TextAbstract(track.name, 60);
    let album_name = TextAbstract(track.album.name, 40);
    if (track.album.name == track.name) {
      album_name = "";
    }
    let play_time = formatTime(track.duration);
    let song_id = track.id;
    let year = track.year;
    let song_image = track.image[2].link;
    let song_artist = TextAbstract(track.primaryArtists, 40);
    let bitrate = document.getElementById("saavn-bitrate");
    let bitrate_i = bitrate.options[bitrate.selectedIndex].value;
    if (track.downloadUrl) {
      let download_url = track.downloadUrl[bitrate_i]["link"];
      let quality = bitrate_i == 4 ? 320 : 160;
      results_objects[song_id] = { track: track };
      resultsHTML += `
                    <div class="video-container bg-zinc-900 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col h-full group" data-song-id="${song_id}" data-download-url="${download_url}">
                        <div class="relative pb-[100%] overflow-hidden">
                            <img src="${song_image}" alt="Album cover" class="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                            <span class="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded-full">${play_time}</span>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div class="p-4 flex-grow bg-zinc-900 relative z-10">
                            <h3 class="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">${song_name}</h3>
                            <p class="text-zinc-400 text-xs line-clamp-1">${song_artist}</p>
                            <p class="text-zinc-500 text-xs mt-1">${album_name} • ${year}</p>
                        </div>
                    </div>
                    `;
    }
  }
  results_container.innerHTML += resultsHTML;

  document.querySelectorAll(".video-container").forEach((container) => {
    const songId = container.dataset.songId;
    if (!results.includes(songId)) {
      playQueue.push(songId);
    }

    container.addEventListener("click", function () {
      const downloadUrl = this.dataset.downloadUrl;
      PlayAudio(downloadUrl, songId);
    });
  });
}
let playQueue = [];
let currentSongIndex = -1;
function TextAbstract(text, length) {
  if (text == null) {
    return "";
  }
  if (text.length <= length) {
    return text;
  }
  text = text.substring(0, length);
  last = text.lastIndexOf(" ");
  text = text.substring(0, last);
  return text + "...";
}

function PlayAudio(audio_url, song_id) {
  var source = document.getElementById("audioSource");
  source.src = audio_url;

  var track = results_objects[song_id].track;
  var name = track.name;
  var album = track.album.name;
  var image = track.image[2].link;

  document.title = name + " - " + album;
  function trimTextIfSmallScreen(text) {
    if (window.innerWidth < 600) {
      return text.length > 20 ? text.slice(0, 11) + "..." : text;
    }
    return text;
  }
  document.getElementById("player-name").textContent =
    trimTextIfSmallScreen(name);
  document.getElementById("player-album").textContent =
    trimTextIfSmallScreen(album);
  document.getElementById("player-image").src = image;

  // Load and wait for audio to buffer
  audio.load();
  audio.addEventListener(
    "canplaythrough",
    function onReady() {
      audio.removeEventListener("canplaythrough", onReady);
      audio.play().catch(function (error) {
        console.error("Error playing audio:", error);
      });
    },
    { once: true }
  );

  updatePlayPauseButton(true);

  if (slowedReverbEnabled) {
    applySlowedReverbEffect();
  } else {
    removeSlowedReverbEffect();
  }

  currentSongIndex = playQueue.indexOf(song_id);

  audio.onended = function () {
    if (currentSongIndex + 1 < playQueue.length) {
      currentSongIndex++;
      const nextSongId = playQueue[currentSongIndex];
      const nextUrl = document.querySelector(
        `.video-container[data-song-id="${nextSongId}"]`
      ).dataset.downloadUrl;
      console.log(nextSongId);
      PlayAudio(nextUrl, nextSongId);
    } else {
      updatePlayPauseButton(false);
    }
  };
}

document.getElementById("loadmore").addEventListener("click", nextPage);

const audio = document.getElementById("player");
const progressBar = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const currentTimeElement = document.getElementById("current-time");
const durationElement = document.getElementById("duration");
const playPauseButton = document.getElementById("play-pause");
const slowedReverbToggle = document.querySelector(".lofi-toggle");

playPauseButton.addEventListener("click", togglePlayPause);
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("loadedmetadata", () => {
  durationElement.textContent = formatTime(audio.duration);
});
progressBar.addEventListener("click", seek);
slowedReverbToggle.addEventListener("click", toggleSlowedReverb);

function togglePlayPause() {
  if (audio.paused) {
    audio.play().catch(function (error) {
      console.error(error);
      // alert("Error playing audio. Please try again.");
    });
    updatePlayPauseButton(true);
  } else {
    audio.pause();
    updatePlayPauseButton(false);
  }
}

function updatePlayPauseButton(isPlaying) {
  playPauseButton.innerHTML = isPlaying
    ? '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd" /></svg>'
    : '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>';
}

function updateProgress() {
  if (!isNaN(audio.duration)) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
    currentTimeElement.textContent = formatTime(audio.currentTime);
  }
}

function seek(e) {
  const progressWidth = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / progressWidth) * duration;
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function toggleSlowedReverb() {
  slowedReverbEnabled = !slowedReverbEnabled;
  const toggle = document.querySelector(".lofi-toggle");
  const knob = document.querySelector(".lofi-toggle-knob");

  if (slowedReverbEnabled) {
    toggle.classList.add("active");
    knob.style.transform = "translateX(24px)";
    applySlowedReverbEffect();
  } else {
    toggle.classList.remove("active");
    knob.style.transform = "translateX(0)";
    removeSlowedReverbEffect();
  }
}

function applySlowedReverbEffect() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    sourceNode = audioContext.createMediaElementSource(audio);
  }

  if (!reverbNode) {
    reverbNode = audioContext.createConvolver();
    const impulseLength = 1 * audioContext.sampleRate;
    const impulse = audioContext.createBuffer(
      2,
      impulseLength,
      audioContext.sampleRate
    );
    const left = impulse.getChannelData(0);
    const right = impulse.getChannelData(1);
    for (let i = 0; i < impulseLength; i++) {
      left[i] = right[i] =
        (Math.random() * 2 - 1) * Math.pow(1 - i / impulseLength, 2);
    }
    reverbNode.buffer = impulse;
  }

  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(0.6, audioContext.currentTime);

  audio.preservesPitch = false;
  audio.playbackRate = 0.9;

  sourceNode.disconnect();
  sourceNode.connect(gainNode);
  gainNode.connect(audioContext.destination);
  sourceNode.connect(reverbNode);
  reverbNode.connect(audioContext.destination);
}

function removeSlowedReverbEffect() {
  audio.playbackRate = 1;
  audio.preservesPitch = true;

  if (sourceNode) {
    sourceNode.disconnect();
    if (reverbNode) {
      reverbNode.disconnect();
    }
    sourceNode.connect(audioContext.destination);
  }
}

// Initial search on page load
if (window.location.hash) {
  doSaavnSearch(window.location.hash.substring(1));
} else {
  doSaavnSearch("Indian Fusion", 1);
}

// Handle hash change
window.addEventListener("hashchange", () => {
  doSaavnSearch(window.location.hash.substring(1));
});

// Update bitrate when changed
document
  .getElementById("saavn-bitrate")
  .addEventListener("change", function () {
    doSaavnSearch(lastSearch);
  });

// Sync mobile bitrate selector with desktop
document
  .getElementById("saavn-bitrate")
  .addEventListener("change", function () {
    document.getElementById("mobile-saavn-bitrate").value = this.value;
  });

document
  .getElementById("mobile-saavn-bitrate")
  .addEventListener("change", function () {
    document.getElementById("saavn-bitrate").value = this.value;
    doSaavnSearch(lastsearch);
  });
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
