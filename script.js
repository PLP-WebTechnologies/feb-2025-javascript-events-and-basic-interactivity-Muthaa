// Event listener for form submission with validation
document.getElementById("subscribe-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("form-message");

  // Basic form validation
  if (name === "" || email === "") {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
  } else if (!validateEmail(email)) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
  } else {
    message.textContent = `Thanks for subscribing, ${name}! 🎉`;
    message.style.color = "green";
  }
});

// Simple email format checker
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Interactive element - color toggle
const colorBox = document.getElementById("color-box");
let isOriginalColor = true;

colorBox.addEventListener("click", () => {
  colorBox.style.backgroundColor = isOriginalColor ? "mediumseagreen" : "tomato";
  colorBox.textContent = isOriginalColor ? "Color changed! Click again!" : "Click me to change my color!";
  isOriginalColor = !isOriginalColor;
});
