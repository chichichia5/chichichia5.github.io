
// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
}
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


window.onload = function() {
  // toeic
  let view_toeic_cert = document.getElementById("view-toeic-cert");
  let toeic_certificate = document.getElementById("toeic-certificate");
  view_toeic_cert.onmouseover = function() {mouseOverToeicScore()};
  view_toeic_cert.onmouseout = function() {mouseOutToeicScore()};
  toeic_certificate.onmouseover = function() {mouseOverToeicScore()};
  toeic_certificate.onmouseout = function() {mouseOutToeicScore()};
  function mouseOverToeicScore() {
    document.getElementById("toeic-certificate").style.width = "130%";
  }
  function mouseOutToeicScore() {
    document.getElementById("toeic-certificate").style.width = "0";
  }
  // Google Ads
  let view_googleAds_cert = document.getElementById("view-googleAds-cert");
  let googleAds_certificate = document.getElementById("googleAds-certificate");
  view_googleAds_cert.onmouseover = function() {mouseOverGoogleAds()};
  view_googleAds_cert.onmouseout = function() {mouseOutGoogleAds()};
  googleAds_certificate.onmouseover = function() {mouseOverGoogleAds()};
  googleAds_certificate.onmouseout = function() {mouseOutGoogleAds()};
  function mouseOverGoogleAds() {
    document.getElementById("googleAds-certificate").style.width = "130%";
  }
  function mouseOutGoogleAds() {
    document.getElementById("googleAds-certificate").style.width = "0";
  }
  // Google media
  let view_googleMedia_cert = document.getElementById("view-googleMedia-cert");
  let googleMedia_certificate = document.getElementById("googleMedia-certificate");
  view_googleMedia_cert.onmouseover = function() {mouseOverGoogleMedia()};
  view_googleMedia_cert.onmouseout = function() {mouseOutGoogleMedia()};
  googleMedia_certificate.onmouseover = function() {mouseOverGoogleMedia()};
  googleMedia_certificate.onmouseout = function() {mouseOutGoogleMedia()};
  function mouseOverGoogleMedia() {
    document.getElementById("googleMedia-certificate").style.width = "130%";
  }
  function mouseOutGoogleMedia() {
    document.getElementById("googleMedia-certificate").style.width = "0";
  }
   

}
