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



var dec = new Date();
document.getElementById("new").innerHTML = dec.toLocaleDateString();




     var days = new Date();
     var weekday = new Array(7);
     weekday[0] = "Sunday";
     weekday[1] = "Monday";
     weekday[2] = "Tuesday";
     weekday[3] = "Wednesday";
     weekday[4] = "Thursday";
     weekday[5] = "Friday";
     weekday[6] = "Saturday";
     document.getElementById("day").innerHTML = weekday[days.getDay()];


     function display_ct() {
var x = new Date()
var x1=x.toUTCString();// changing the display to UTC string
document.getElementById('ct').innerHTML = x1;
tt=display_c();
 }




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








// Set the original/default language
var lang = "en";
var currentClass = "currentLang";

// Load the language lib
google.load("language",1);

// When the DOM is ready....
window.addEvent("domready",function(){
	// Retrieve the DIV to be translated.
	var translateDiv = document.id("languageBlock");
	// Define a function to switch from the currentlanguage to another
	var callback = function(result) {
		if(result.translation) {
			translateDiv.set("html",result.translation);
		}
	};
	// Add a click listener to update the DIV
	$$("#languages a").addEvent("click",function(e) {
		// Stop the event
		if(e) e.stop();
		// Get the "to" language
		var toLang = this.get("rel");
		// Set the translation into motion
		google.language.translate(translateDiv.get("html"),lang,toLang,callback);
		// Set the new language
		lang = toLang;
		// Add class to current
		this.getSiblings().removeClass(currentClass);
		this.addClass(currentClass);
	});
});
