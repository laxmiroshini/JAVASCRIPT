let isDarkMode = false; 
function toggleMode() {
  isDarkMode = !isDarkMode; 
  document.body.style.backgroundColor = isDarkMode ? "black" : "white";
  document.body.style.color = isDarkMode ? "white" : "black";
  document.querySelector("button").textContent = 
   isDarkMode ? "Switch to Light Mode ☀️" : "Switch to Dark Mode 🌙";
}
