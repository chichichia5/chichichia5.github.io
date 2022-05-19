
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
    document.getElementById("toeic-certificate").style.width = "50%";
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
    document.getElementById("googleAds-certificate").style.width = "30%";
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
    document.getElementById("googleMedia-certificate").style.width = "30%";
  }
  function mouseOutGoogleMedia() {
    document.getElementById("googleMedia-certificate").style.width = "0";
  }
  // Google marketing
  let view_googleMarketing_cert = document.getElementById("view-googleMarketing-cert");
  let googleMarketing_certificate = document.getElementById("googleMarketing-certificate");
  view_googleMarketing_cert.onmouseover = function() {mouseOverGoogleMarketing()};
  view_googleMarketing_cert.onmouseout = function() {mouseOutGoogleMarketing()};
  googleMarketing_certificate.onmouseover = function() {mouseOverGoogleMarketing()};
  googleMarketing_certificate.onmouseout = function() {mouseOutGoogleMarketing()};
  function mouseOverGoogleMarketing() {
    document.getElementById("googleMarketing-certificate").style.width = "30%";
  }
  function mouseOutGoogleMarketing() {
    document.getElementById("googleMarketing-certificate").style.width = "0";
  }
  // Google Analytics 
  let view_googleAnalytics_cert = document.getElementById("view-googleAnalytics-cert");
  let googleAnalytics_certificate = document.getElementById("googleAnalytics-certificate");
  view_googleAnalytics_cert.onmouseover = function() {mouseOverGoogleAnalytics()};
  view_googleAnalytics_cert.onmouseout = function() {mouseOutGoogleAnalytics()};
  googleAnalytics_certificate.onmouseover = function() {mouseOverGoogleAnalytics()};
  googleAnalytics_certificate.onmouseout = function() {mouseOutGoogleAnalytics()};
  function mouseOverGoogleAnalytics() {
    document.getElementById("googleAnalytics-certificate").style.width = "30%";
  }
  function mouseOutGoogleAnalytics() {
    document.getElementById("googleAnalytics-certificate").style.width = "0";
  }
  // Google Analytics Basic
  let view_googleAnalyticsBa_cert = document.getElementById("view-googleAnalyticsBa-cert");
  let googleAnalyticsBa_certificate = document.getElementById("googleAnalyticsBa-certificate");
  view_googleAnalyticsBa_cert.onmouseover = function() {mouseOverGoogleAnalyticsBa()};
  view_googleAnalyticsBa_cert.onmouseout = function() {mouseOutGoogleAnalyticsBa()};
  googleAnalyticsBa_certificate.onmouseover = function() {mouseOverGoogleAnalyticsBa()};
  googleAnalyticsBa_certificate.onmouseout = function() {mouseOutGoogleAnalyticsBa()};
  function mouseOverGoogleAnalyticsBa() {
    document.getElementById("googleAnalyticsBa-certificate").style.width = "30%";
  }
  function mouseOutGoogleAnalyticsBa() {
    document.getElementById("googleAnalyticsBa-certificate").style.width = "0";
  }
  // Google Analytics Advanced
  let view_googleAnalyticsAd_cert = document.getElementById("view-googleAnalyticsAd-cert");
  let googleAnalyticsAd_certificate = document.getElementById("googleAnalyticsAd-certificate");
  view_googleAnalyticsAd_cert.onmouseover = function() {mouseOverGoogleAnalyticsAd()};
  view_googleAnalyticsAd_cert.onmouseout = function() {mouseOutGoogleAnalyticsAd()};
  googleAnalyticsAd_certificate.onmouseover = function() {mouseOverGoogleAnalyticsAd()};
  googleAnalyticsAd_certificate.onmouseout = function() {mouseOutGoogleAnalyticsAd()};
  function mouseOverGoogleAnalyticsAd() {
    document.getElementById("googleAnalyticsAd-certificate").style.width = "30%";
  }
  function mouseOutGoogleAnalyticsAd() {
    document.getElementById("googleAnalyticsAd-certificate").style.width = "0";
  }
  // line
  let view_line_cert = document.getElementById("view-line-cert");
  let line_certificate = document.getElementById("line-certificate");
  view_line_cert.onmouseover = function() {mouseOverline()};
  view_line_cert.onmouseout = function() {mouseOutline()};
  line_certificate.onmouseover = function() {mouseOverline()};
  line_certificate.onmouseout = function() {mouseOutline()};
  function mouseOverline() {
    document.getElementById("line-certificate").style.width = "30%";
  }
  function mouseOutline() {
    document.getElementById("line-certificate").style.width = "0";
  }
  // International Trade
  let view_trade_cert = document.getElementById("view-trade-cert");
  let trade_certificate = document.getElementById("trade-certificate");
  view_trade_cert.onmouseover = function() {mouseOvertrade()};
  view_trade_cert.onmouseout = function() {mouseOuttrade()};
  trade_certificate.onmouseover = function() {mouseOvertrade()};
  trade_certificate.onmouseout = function() {mouseOuttrade()};
  function mouseOvertrade() {
    document.getElementById("trade-certificate").style.width = "30%";
  }
  function mouseOuttrade() {
    document.getElementById("trade-certificate").style.width = "0";
  }
  // Business
  let view_business_cert = document.getElementById("view-business-cert");
  let business_certificate = document.getElementById("business-certificate");
  view_business_cert.onmouseover = function() {mouseOverbusiness()};
  view_business_cert.onmouseout = function() {mouseOutbusiness()};
  business_certificate.onmouseover = function() {mouseOverbusiness()};
  business_certificate.onmouseout = function() {mouseOutbusiness()};
  function mouseOverbusiness() {
    document.getElementById("business-certificate").style.width = "30%";
  }
  function mouseOutbusiness() {
    document.getElementById("business-certificate").style.width = "0";
  }
 

}
