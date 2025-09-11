// Function to greet the user
function greetMe() {
  const name = document.getElementById("nameInput").value;
  const message = name ? "Hello, " + name + "!" : "Hello!";
  document.getElementById("greeting").textContent = message;
}
// Function to toggle background color
let isWhite = true;
function toggleBackground() {
  if (isWhite) {
    document.body.style.backgroundColor = "lightblue";
  } else {
    document.body.style.backgroundColor = "white";
  }
  isWhite = !isWhite;
}

// --- 1. Variables and sum calculation ---
var a = 10;
var b = 20;
var sum = a + b;
alert("The sum of a and b is " + sum + "\n(Note: a = " + a + " and b = " + b + " are integers)");

// --- 2. Function to greet the user ---
function greetMe() {
  const name = document.getElementById("nameInput").value;
  const message = name ? "Hello, " + name + "!" : "Hello!";
  document.getElementById("greeting").textContent = message;
}


// --- 4. (Optional) Function to calculate sum dynamically ---
function calculateSum(x, y) {
  return x + y;
}
// -- palindrome