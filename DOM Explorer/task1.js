"use strict";

// Select the heading element
const heading = document.querySelector(".topic");

// Select the paragraph
const paragraph = document.querySelectorAll(".content");

// Select the button
const button = document.querySelector(".btn");

// logging the selected elements in the console
console.log(heading);
console.log(paragraph);
console.log(button);

// Change the heading when the page loads
heading.textContent = "Week Seven - DOM Explorer";

// Add a new paragraph when the button is clicked
button.addEventListener("click", function () {
  // Create a new paragraph element and add it to the class name "content"
  const newParagraph = document.createElement("p");
  newParagraph.classList.add("content");

  // Add text to the new paragraph
  newParagraph.textContent =
    " Fun Fact: The DOM is the reason your favorite web pages can change right in front of your eyes without you ever hitting the refresh button. When a browser loads a page, it secretly translates the static HTML code into a 'living tree' of objects that JavaScript can constantly manipulate, meaning every time you click a button and a menu slides out, an item is added to your cart, or a dark mode toggle flips, you are actually watching a coding language perform live surgery on a digital tree structure in real-time.";

  // Display the paragraph on the page above the button instead of below with .appendChild
  document.body.insertBefore(newParagraph, button);
});
