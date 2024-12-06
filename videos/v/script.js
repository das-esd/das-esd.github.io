var mcquote = [
  "One good thing about music, when it hits you, you feel no pain. - Bob Marley",
  "Without music, life would be a mistake. - Friedrich Nietzsche",
  "Where words fail, music speaks. - Hans Christian Andersen",
  "Music is moonlight in the gloomy night of life. - Jean Paul",
  "Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness. - Maya Angelou",
  "Music is very spiritual, it has the power to bring people together. - Edgar Winter",
  "Music is always changing and the changes are unpredictable. - Billy Sheehan",
  "Every song is like a painting. - Dick Dale",
  "If music be the food of love, play on. - William Shakespeare",
];

var len = mcquote.length;
var rqno = Math.floor(Math.random() * len);
var mcqt = document.getElementById("smvidq");
mcqt.innerHTML = " " + mcquote[rqno];

var vsrc = [
  "../video/badhuya.mp4",
  "../video/she-is-educating.mp4",
  "../video/oh-hollow.mp4",
  "../video/a-reason-todie.mp4",
  "../video/there-is-no-blood.mp4",
  "../video/love-and-breathe.mp4",
];

var vidset = [
  "bdhyr",
  "jnlbt",
  "sised",
  "oholw",
  "artde",
  "tinbo",
  "labre",
  "dhdhr",
  "hmiss",
];

var vidimg = [];

var vidtit = [];

var url_string = window.location.href;
var url = new URL(url_string);
var q = url.searchParams.get("vsrc");
// var k = window.atob(url.searchParams.get("bizk"));
var r = url.searchParams.get("q");
if (r == "true") {
  for (var k = 0; k < vidset.length; k++) {
    if (q == vidset[k]) {
      document.getElementById("imvid").setAttribute("src", vsrc[k]);
      document.getElementById("vdtitle").innerHTML = "";
    }
  }
}
