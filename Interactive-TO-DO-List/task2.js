"use strict";

// Select the input field, button and task list
const input = document.querySelector(".task-input");
const addBtn = document.querySelector(".btn");
const taskList = document.querySelector(".task-list");

// Add a new task when the button is clicked
addBtn.addEventListener("click", function () {
  // Prevent empty tasks from being added
  if (input.value === "") return;

  // Create a new list item
  const li = document.createElement("li");

  // Create a span to hold the task text
  const taskText = document.createElement("span");
  taskText.textContent = input.value;

  // Create the delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Add the task text and delete button to the list item
  li.appendChild(taskText);
  li.appendChild(deleteBtn);

  // Add the list item to the task list
  taskList.appendChild(li);

  // Clear the input field

  input.value = "";

  // Mark a task as completed when it is clicked
  taskText.addEventListener("click", function () {
    taskText.classList.toggle("completed");
  });

  // Remove a task when the delete button is clicked
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
});
