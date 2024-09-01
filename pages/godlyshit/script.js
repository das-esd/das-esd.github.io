const carousel = document.querySelector(".story-carousel");
const stories = document.querySelectorAll(".story");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const playPauseButton = document.getElementById("playPause");
const progressBars = document.querySelectorAll(".progress-bar");

let currentIndex = 0;
const colorThief = new ColorThief();
let autoSlideInterval;
let isPlaying = true;
let startX, startY, endX, endY;

function updateBackgroundColor(index) {
  const img = stories[index].querySelector("img");

  if (img.complete) {
    const color = colorThief.getColor(img);
    carousel.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  } else {
    img.addEventListener("load", () => {
      const color = colorThief.getColor(img);
      carousel.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    });
  }
}

function resetProgressBars() {
  progressBars.forEach((bar) => {
    bar.style.width = "0";
    bar.classList.remove("active");
  });
}

function startProgressBar(index) {
  progressBars[index].classList.add("active");
}

function showStory(index) {
  if (index >= 0 && index < stories.length) {
    const offset = index * carousel.clientWidth;
    carousel.scrollTo({
      left: offset,
      behavior: "smooth",
    });
    currentIndex = index;
    resetProgressBars();
    startProgressBar(currentIndex);
    updateBackgroundColor(currentIndex);
    if (isPlaying) {
      restartAutoSlide();
    }
  }
}

function restartAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    if (currentIndex < stories.length - 1) {
      showStory(currentIndex + 1);
    } else {
      showStory(0);
    }
  }, 10000);
}

function togglePlayPause() {
  if (isPlaying) {
    clearInterval(autoSlideInterval);
    playPauseButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>`;
  } else {
    restartAutoSlide();
    playPauseButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
</svg>`;
  }
  isPlaying = !isPlaying;
}

playPauseButton.addEventListener("click", togglePlayPause);

nextButton.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentIndex < stories.length - 1) {
    showStory(currentIndex + 1);
  }
});

prevButton.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentIndex > 0) {
    showStory(currentIndex - 1);
  }
});

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

carousel.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  endY = e.changedTouches[0].clientY;
  handleSwipe();
});

function handleSwipe() {
  const diffX = startX - endX;
  const diffY = startY - endY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 50 && currentIndex < stories.length - 1) {
      showStory(currentIndex + 1);
    } else if (diffX < -50 && currentIndex > 0) {
      showStory(currentIndex - 1);
    }
  }
}

carousel.addEventListener("click", (e) => {
  if (
    e.target === nextButton ||
    e.target === prevButton ||
    e.target === playPauseButton ||
    e.target === progressBars
  ) {
    return;
  }

  const clickX = e.clientX;
  const carouselWidth = carousel.clientWidth;

  if (clickX > carouselWidth / 2) {
    if (currentIndex < stories.length - 1) {
      showStory(currentIndex + 1);
    }
  } else {
    if (currentIndex > 0) {
      showStory(currentIndex - 1);
    }
  }
});

carousel.addEventListener("mousedown", (e) => {
  clearInterval(autoSlideInterval);
});

carousel.addEventListener("mouseup", () => {
  if (isPlaying) {
    restartAutoSlide();
  }
});

updateBackgroundColor(currentIndex);
restartAutoSlide();
