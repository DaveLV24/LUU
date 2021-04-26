///testing script initiation ///
console.log("Script Loaded");

/// To the top code ///

//Get the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// when the user clicks on the button, scrolls to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

///input field verification ///
$(document).ready(function () {
  $("#myForm").validate({
    // specify validation rules
    validClass: "valid-tooltip",
    errorClass: "invalid-tooltip",
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      password: {
        required: true,
        minlength: 6,
      },
      checkbox: {
        required: true,
      },
    },
    // specify validation error messages
    messages: {
      name: {
        required: "Please provide a name",
        minlength: "Min 3 characters",
      },
      password: {
        required: "Please provide a password",
        minlength: "Min 6 characters long",
      },
      checkbox: {
        required: "Agree to terms please",
      },
    },
    // form is submitted to the destination defined
    // in the "action" attribute
    submitHandler: function (form) {
      form.submit();
    },
  });
});

//toggling function for adding new p///
$(function () {
  let secretSection =
    '<div class="row about3 justify-content-center">' +
    '<div class="col-md-4 order-md-4" id="secret3">' +
    '<h2 class="featurette-heading">Wow you did it! <span class="text-muted">You unlocked secret section..</span></h2>' +
    '<p class="lead" id="colors">I was pretty sure no one would find this.</p> </div>' +
    '<div class="col-md-2 order-md-1">' +
    '<img class="featurette-image img-fluid mx-auto about-img" alt="secret-pic" src="/images/congrats.png">' +
    "</div>" +
    "</div>" +
    "<hr>";
  let added = false;
  let $content;
  $(".buttonn").on("click", function () {
    if (!added) $content = $(secretSection).appendTo("#add-to-me");
    else $content.remove();
    added = !added;
  });
});

///changing color for p///
document.querySelector("#colors").style.color = "#5545F1";
