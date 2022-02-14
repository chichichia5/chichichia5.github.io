// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.padding = "7px 5px";
    document.getElementById("logo").style.fontSize = "15px";
    document.getElementById("edu").style.fontSize = "10px";
    document.getElementById("mail").style.fontSize = "10px";
    document.getElementById("phone").style.fontSize = "10px";
    document.getElementById('me'). style.width='130px';
    document.getElementById('education').style.fontSize = '15px';
    document.getElementById('phoneicon').style.fontSize = '15px';
    document.getElementById('mailicon').style.fontSize = '15px';
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "30px";
    document.getElementById("edu").style.fontSize = "23px";
    document.getElementById("mail").style.fontSize = "23px";
    document.getElementById("phone").style.fontSize = "23px";
    document.getElementById('me'). style.width='220px';
    document.getElementById('education').style.fontSize = '30px';
    document.getElementById('phoneicon').style.fontSize = '30px';
    document.getElementById('mailicon').style.fontSize = '30px';
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


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
