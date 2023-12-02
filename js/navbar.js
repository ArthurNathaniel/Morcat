const toggleButton = document.getElementById("toggleButton");
const navItems = document.querySelector(".nav-items");
const iconElement = document.querySelector("#toggleButton i");

toggleButton.addEventListener("click", () => {
  // Toggle the 'show-flex' class on the nav-items element
  navItems.classList.toggle("show-flex");

  // Toggle the font awesome icon between 'fa-bars' and 'fa-xmark'
  if (iconElement.classList.contains("fa-bars")) {
    iconElement.classList.remove("fa-bars");
    iconElement.classList.add("fa-xmark");
  } else {
    iconElement.classList.remove("fa-xmark");
    iconElement.classList.add("fa-bars");
  }
});
