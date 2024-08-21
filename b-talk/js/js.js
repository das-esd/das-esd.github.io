function zoommit(label) {
  var list = document.getElementsByClassName("zoomon");
  list = [].slice.call(list);
  var posofimg = list.indexOf(label);
  var srcimg = document.getElementsByClassName("zoomon")[posofimg].src;
  $("#enlrgimg").fadeIn();
  document.getElementById("emprimgenlrg").src = srcimg;
}
$("#enlrgimg").click(function () {
  $("#enlrgimg").hide();
});
const fullscreenButton = document.getElementById("flbtnone");
const fullscreenDiv = document.getElementById("firstdiv");

fullscreenButton.addEventListener("click", opnFullscreen);

function opnFullscreen() {
  fullscreenDiv.classList.remove("tm-bg-white-translucent");
  fullscreenDiv.classList.remove("text-xs-left");
  fullscreenDiv.classList.remove("tm-textbox");
  fullscreenDiv.classList.remove("tm-textbox-1-col");
  fullscreenDiv.classList.add("fullscreen");
  $(".cd-slider-nav,.opbflscrn,#footrdv").hide();
  fullscreenDiv.style.display = "block";
  const exitFullscreenButton = document.createElement("button");
  exitFullscreenButton.innerHTML = '<i class="material-icons">&#xe5d1;</i>';
  exitFullscreenButton.id = "extflbtn";
  fullscreenDiv.appendChild(exitFullscreenButton);
  exitFullscreenButton.addEventListener("click", closeFullscreen);
}

function closeFullscreen() {
  $(".cd-slider-nav,.opbflscrn,#footrdv").show();
  fullscreenDiv.classList.remove("fullscreen");
  fullscreenDiv.classList.add("tm-bg-white-translucent");
  fullscreenDiv.classList.add("text-xs-left");
  fullscreenDiv.classList.add("tm-textbox");
  fullscreenDiv.classList.add("tm-textbox-1-col");
  document.getElementById("extflbtn").remove();
}
