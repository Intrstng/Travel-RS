
function openNav() {
  document.getElementById("burger-menu").style.width = "165px";
}

function closeNav() {
  document.getElementById("burger-menu").style.width = "0";
}


//Close burger menu by tapping on free space
/*
var modburger = document.getElementById("burger-menu");

window.onclick = function(event) {
  if (event.target == modburger) {
    modburger.style.width = "0";
  }
}
*/


/* Login Popup
==================== */

// Get the modal Login popup
var logmodal = document.getElementById("loginPopup");

// Get the button that opens the modal Login popup
var logbtn = document.getElementById("LogBtn");

// Get the button that closes modal and goes to Sign in popup
var logspan = document.getElementById("regBtn")

            /*
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            */

// When the user clicks the button, open the modal 
logbtn.onclick = function() {
    logmodal.style.display = "block";
}

// When the user clicks on <span> (regBtn - Register), closes the modal and goes to Sign in popup
logspan.onclick = function() {
    logmodal.style.display = "none";
    signmodal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it

window.addEventListener('click', function (event) {
  if (event.target == logmodal) {
    logmodal.style.display = "none";
  }
})

/* Было: не работало сокрытие первого попапа по клуку на свободном месте 
window.onclick = function(event) {
  if (event.target == logmodal) {
    logmodal.style.display = "none";
  }
}
*/

/* Sign Popup
==================== */

// Get the modal Sign popup
var signmodal = document.getElementById("signPopup");

// Get the button that opens the modal Sign popup
var signbtn = document.getElementById("regBtn");

// Get the button that closes modal and goes back to Login popup
var signspan = document.getElementById("backToLoginBtn")

            /*
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            */

// When the user clicks the button, open the modal 
signbtn.onclick = function() {
    signmodal.style.display = "block";
    logmodal.style.display = "none";
}

// When the user clicks on <span> (backToLogin), close the modal
signspan.onclick = function() {
    signmodal.style.display = "none";
    logmodal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it

/* Было: не работало сокрытие первого попапа по клуку на свободном месте 

window.onclick = function(event) {
  if (event.target == signmodal) {
      signmodal.style.display = "none";
  }
}
*/

window.addEventListener('click', function (event) {
  if (event.target == signmodal) {
    signmodal.style.display = "none";
  }
})