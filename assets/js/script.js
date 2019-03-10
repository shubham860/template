$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

var d = new Date();
document.getElementById("demo").innerHTML = d.toUTCString();



if (typeof Storage !== "undefined") {
  if (localStorage.visitcount) {
    document.getElementById("result").innerHTML =
      "Visitors hits : " +
      localStorage.visitcount;
    localStorage.visitcount = Number(localStorage.visitcount) + 1;
  } else {
    localStorage.visitcount = 1;
    document.getElementById("result").innerHTML =
      "";
  }
  // document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
} else {
   alert("Sorry");
  document.getElementById("result").innerHTML =
    "Sorry";
}

console.log("localstorage visit count now: " + localStorage.visitcount);

// localStorage.clear();
