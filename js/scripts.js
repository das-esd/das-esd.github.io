/*!
 * Start Bootstrap - dpro v6.0.2 (https://startbootstrap.com/theme/dpro)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-dpro/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
    $("#audioframe").hide();
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });

  $("#signbtn").click(function () {
    $("#signdiv").toggle("fast");
    $("#conconas").hide();
    $(".navbar-collapse").collapse("hide");
    $("#newsmag").css("z-index", "1");
  });

  $("#onaudio").click(function () {
    $("#audioframe").toggle();
    $("#conconas").hide();
    $(".navbar-collapse").collapse("hide");
  });

  $("#clsaud").click(function () {
    $("#audioframe").hide();
  });

  $("#onopcal").click(function () {
    $("#calcont").toggle();
  });

  $("#clcnas").click(function () {
    var hdelem = document.getElementById("conconas");
    if (hdelem.style.display == "block") {
      $("#conconas").hide();
      $("#calcont").hide();
      document.getElementById("clcnas").innerHTML = " << ";
    } else {
      $("#conconas").show();
      $("#audioframe").hide();
      document.getElementById("clcnas").innerHTML = " >> ";
    }
  });
})(jQuery); // End of use strict

////////////////////////////////////////////

// Get general device information
const userAgent = navigator.userAgent;
const platform = navigator.platform;
const language = navigator.language;

// Get screen dimensions
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

// Get browser information
const browserName = navigator.appName;
const browserVersion = navigator.appVersion;

// Initialize device details object
const deviceDetails = {
  userAgent,
  platform,
  language,
  screenWidth,
  screenHeight,
  browserName,
  browserVersion,
};

// Get device location

var dvcinf = JSON.stringify(deviceDetails);
var ur1 = "https://script.google.com/macros/s/";
var ur2 =
  "AKfycbxH8TP8wM4EqAu2Ssa3vfz2BzIzgcBgDj8ZUhT-vpLkWJh4ymyJiT6lgnUvJVgg28xt";
var urlv = ur1 + ur2 + "/exec";
var dtstr = new Date();
inlivefrm.addEventListener("submit", (event) => {
  document.getElementById("subinlv").disabled = true;
  liveond();
});
function liveond() {
  var glid = $("#glddid").val();
  var ddid = $("#justpass").val();
  var url =
    urlv +
    "?callback=ldprevd&glid=" +
    glid +
    "&ddid=" +
    ddid +
    "&timestp=" +
    dtstr +
    "&dvcinf=" +
    dvcinf +
    "&action=chinlv";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp",
  });
}
function ldprevd(e) {
  var res = e.records;
  if (res != "ID not found!") {
    var cldata = res[0].Calender;
    document.getElementById("allsvevnt").value = cldata;
    document.getElementById("subinlv").disabled = false;
    var k = window.btoa("SOUBHIK");
    SetCookie(1, k);
    $("#signdiv").hide();
    $("#livfunc").show();
    $("#onaudio").show();
    $("#newsmag").css("z-index", "20000");
    $("#conascon").load("divsec/conas.html");
  } else {
    document.getElementById("subinlv").disabled = false;
  }
  getcalendar();
}

////// Audios///////
function loadaudio() {
  $("#adapp").load("audios/adapp.html");
}
/////////////////Calender////////////////

function getcalendar() {
  var calendarEl = document.getElementById("calendar");
  var preevent = $("#allsvevnt").val();
  var elemev = preevent.split("{e},");
  var eventsup = [];
  for (var i = 0; i < elemev.length - 1; i += 3) {
    var entry = {};
    entry.title = JSON.parse(unescape(elemev[i]));
    entry.start = JSON.parse(elemev[i + 1]);
    entry.end = JSON.parse(elemev[i + 2]);
    eventsup.push(entry);
  }

  var date = new Date();
  var tois = date.toISOString();
  var flcaldate = tois.substring(0, 10);
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "listYear",
    headerToolbar: {
      left: "prev,next",
      center: "title",
      right: "multiMonthYear,dayGridMonth,timeGridDay,listYear",
    },
    views: {
      listYear: { buttonText: "all events" },
    },
    initialDate: flcaldate,
    navLinks: true,
    weekNumbers: true,
    weekNumberCalculation: "ISO",
    selectable: true,
    selectMirror: true,
    select: function (arg) {
      var title = prompt("Event Title:");
      // Check and Restrict String
      var checkstr = function (title) {
        var fl1 = title.split('"');
        var fl2 = title.split("e}");
        if (fl1[1] != null || fl2[1] != null) {
          return true;
        }
      };
      if (title != "" && checkstr(title) != true) {
        calendar.addEvent({
          title: title,
          start: arg.start,
          end: arg.end,
          allDay: arg.allDay,
        });
        // console.log(title,arg.start,arg.allDay);
        var t = JSON.stringify(escape(title));
        var s = JSON.stringify(arg.start.toISOString());
        var e = JSON.stringify(arg.end.toISOString());
        var k = "{e},";
        var evnt = t + k + s + k + e + k;
        var glid = $("#glddid").val();
        var ddid = $("#justpass").val();
        var ur1 = "https://script.google.com/macros/s/";
        var ur2 =
          "AKfycbxH8TP8wM4EqAu2Ssa3vfz2BzIzgcBgDj8ZUhT-vpLkWJh4ymyJiT6lgnUvJVgg28xt";
        var url =
          ur1 +
          ur2 +
          "/exec" +
          "?callback=ctrlqevsv&glid=" +
          glid +
          "&ddid=" +
          ddid +
          "&event=" +
          evnt +
          "&action=upevnt";
        var request = jQuery.ajax({
          crossDomain: true,
          url: url,
          method: "GET",
          dataType: "jsonp",
        });
      }
      calendar.unselect();
    },
    eventClick: function (arg) {
      if (confirm("Are you sure you want to delete this event?")) {
        arg.event.remove();
        var tt = JSON.stringify(escape(arg.event.title));
        var st = JSON.stringify(arg.event.start.toISOString());
        var et = JSON.stringify(arg.event.end.toISOString());
        var kt = "{e},";
        var delitm = tt + kt + st + kt + et + kt;
        var glid = $("#glddid").val();
        var ddid = $("#justpass").val();
        var ur1 = "https://script.google.com/macros/s/";
        var ur2 =
          "AKfycbxH8TP8wM4EqAu2Ssa3vfz2BzIzgcBgDj8ZUhT-vpLkWJh4ymyJiT6lgnUvJVgg28xt";
        var url =
          ur1 +
          ur2 +
          "/exec" +
          "?callback=ctrlqevrmv&glid=" +
          glid +
          "&ddid=" +
          ddid +
          "&event=" +
          delitm +
          "&action=rmvevnt";
        var request = jQuery.ajax({
          crossDomain: true,
          url: url,
          method: "GET",
          dataType: "jsonp",
        });
      }
    },

    // editable: true,
    dayMaxEvents: true,
    events: eventsup,
  });

  calendar.render();
}

function ctrlqevsv(e) {
  liveond();
}

function ctrlqevrmv(e) {
  liveond();
}

///////////Cookie/////////////

var SetCookie = function (exdays, uid) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie =
    "_dfunc=" + uid + "; expires=" + expires + ";path=/;domain=soubhikdas.in";
  // setTimeout(loadaudio(),1000) ;
  loadaudio();
};
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
  return "";
}
var useru = GetCookie("_dfunc");
if (useru != "") {
  $("#onaudio").show();
  document
    .getElementById("conascon")
    .setAttribute("ng-include", "'divsec/conas.html'");
  document
    .getElementById("adapp")
    .setAttribute("ng-include", "'audios/adapp.html'");
}
function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie =
      name +
      "=true;" +
      "expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=soubhikdas.in";
  }
  setTimeout(function () {
    location.reload();
  }, 2000);
}

var ewfGetCookie = (function () {
  var name = "_dfunc=true";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      ewf_expire = true;
      return;
    }
  }
  ewf_expire = false;
})();

if (ewf_expire) {
  deleteAllCookies();
  window.open("https://das-github.io", "_self");
}

$(document).ready(function loadartpst() {
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycbxc6Ljdrah_Y32syw7bILdTQoevZ39VpGfNztpq1l18JN_d4njnTWcw3nQne99TN_6cKw";
  var url = ur1 + ur2 + "/exec" + "?callback=inrd&rdin=dascl" + "&action=in";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp",
  });
  $(".rfrshpst").click(function () {
    loadartpst();
    $("#fetchpsty").empty();
  });
});

function inrd(e) {
  if (e.records != "") {
    var elem = document.createElement("div");
    var elem2 = document.getElementById("fetchpsty");
    elem.id = "mynote";
    elem.innerHTML =
      '<div id="opnote">' +
      e.record1 +
      '</div><div id="clsmynt" onclick="showntbtn(this);">CLOSE</div>';
    $("#about").append(elem);
    document.getElementById("shwmnote").style.display = "block";
  }
  elem2.innerHTML = e.record2;
  document.getElementById("sectutor").style.display = "block";
  document.getElementById("sectutor").addEventListener("click", function () {
    var newDiv = document.createElement("div");
    var predv = document.getElementById("tutrldiv");
    var clsprdv = document.getElementById("clstutrl");
    if (predv !== null) {
      predv.remove();
      clsprdv.remove();
      newDiv.id = "tutrldiv";
      clsprdv.id = "clstutrl";
    }
    newDiv.id = "tutrldiv";
    newDiv.innerHTML = e.record3;
    var closeButton = document.createElement("button");
    closeButton.id = "clstutrl";
    closeButton.style.position = "fixed";
    closeButton.style.bottom = "0";
    closeButton.style.left = "0";
    closeButton.style.width = "100%";
    closeButton.style.height = "5vh";
    closeButton.style.border = "0px";
    closeButton.style.backgroundColor = "#c50f0f";
    closeButton.style.color = "white";
    closeButton.style.zIndex = "20000";
    closeButton.innerHTML =
      "<span style='float:left;'>&#9997; Tutorials & Ref. | by Soubhik Das</span><span style='float:right;'>Close</span>";
    closeButton.addEventListener("click", function () {
      document.body.removeChild(newDiv);
      document.body.removeChild(closeButton);
    });
    document.body.append(closeButton);
    document.body.append(newDiv);
  });
}
function showntbtn() {
  $("#mynote").hide();
  $("#shwmnote").show("fast");
}

$(document).ready(function fixdfun() {
  if ($(window).width() > 1440) {
    $("#mynote").slideDown();
  }
});

document.getElementById("openModalBtn").addEventListener("click", function () {
  $("#mypost").show();
});

document
  .getElementsByClassName("closepst")[0]
  .addEventListener("click", function () {
    document.getElementById("mypost").style.display = "none";
  });
window.addEventListener("click", function (event) {
  var modal = document.getElementById("mypost");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
