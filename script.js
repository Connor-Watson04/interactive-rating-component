const buttons = document.querySelectorAll(".list-items");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Get the elements
//   var submitButton = document.querySelector(".btn");
//   var thanksSection = document.querySelector(".thanks");
//   var ratingSection = document.querySelector(".rating");
//   var ratingButtons = document.querySelectorAll(".list-items");

//   // Hide the "thanks" section initially
//   thanksSection.style.display = "none";

//   // Add event listeners to the rating buttons
//   ratingButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       // Mark the selected button
//       markSelectedButton(button);
//     });
//   });

//   // Add an event listener to the "SUBMIT" button
//   submitButton.addEventListener("click", function (event) {
//     // Prevent the default behavior of the link
//     event.preventDefault();

//     // Check if at least one button is selected before showing the "thanks" section
//     if (isAnyButtonSelected()) {
//       // Hide the "rating" section and show the "thanks" section
//       ratingSection.style.display = "none";
//       thanksSection.style.display = "block";
//     } else {
//       alert("Please select a rating before submitting.");
//     }
//   });

//   // Function to mark the selected button
//   function markSelectedButton(selectedButton) {
//     ratingButtons.forEach(function (button) {
//       button.classList.remove("selected");
//     });
//     selectedButton.classList.add("selected");
//   }

//   // Function to check if at least one button is selected
//   function isAnyButtonSelected() {
//     return Array.from(ratingButtons).some(function (button) {
//       return button.classList.contains("selected");
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  // Get the elements
  var submitButton = document.querySelector(".btn");
  var thanksSection = document.querySelector(".thanks");
  var ratingSection = document.querySelector(".rating");
  var ratingButtons = document.querySelectorAll(".list-items");
  var selectedDiv = document.querySelector(".selected");
  var scoreDiv = document.querySelector(".score");

  // Hide the "thanks" section initially
  thanksSection.style.display = "none";

  // Add event listeners to the rating buttons
  ratingButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Mark the selected button and update the selected and score divs
      markSelectedButton(button);
      updateSelectedAndScore(button.innerText);
    });
  });

  // Add an event listener to the "SUBMIT" button
  submitButton.addEventListener("click", function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Check if at least one button is selected before showing the "thanks" section
    if (isAnyButtonSelected()) {
      // Hide the "rating" section and show the "thanks" section
      ratingSection.style.display = "none";
      thanksSection.style.display = "block";
    } else {
      alert("Please select a rating before submitting.");
    }
  });

  // Function to mark the selected button
  function markSelectedButton(selectedButton) {
    ratingButtons.forEach(function (button) {
      button.classList.remove("selected");
    });
    selectedButton.classList.add("selected");
  }

  // Function to update the selected and score divs
  function updateSelectedAndScore(value) {
    selectedDiv.textContent = "You selected " + value;
    scoreDiv.textContent = "out of 5";
  }

  // Function to check if at least one button is selected
  function isAnyButtonSelected() {
    return Array.from(ratingButtons).some(function (button) {
      return button.classList.contains("selected");
    });
  }
});
