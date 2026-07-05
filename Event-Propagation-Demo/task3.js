"use strict";

// Select the nested divs and the button
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const stopBtn = document.querySelector(".stop-btn");

// Log a message when the grandparent div is clicked
grandparent.addEventListener("click", function () {
  console.log("Grandparent div was clicked.");
});

// Log a message when the parent div is clicked
parent.addEventListener("click", function () {
  console.log("Parent div was clicked.");
});

// Log a message when the child div is clicked
child.addEventListener("click", function () {
  console.log("Child div was clicked.");
});

// Stop the click event from bubbling to the parent elements
stopBtn.addEventListener("click", function (event) {
  event.stopPropagation();

  // stopPropagation() prevents the click event from bubbling up to the parent elements.
  console.log("Button clicked. Event propagation stopped.");
});
