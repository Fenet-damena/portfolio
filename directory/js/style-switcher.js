const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

const daynight = document.querySelector(".day-night");
daynight.addEventListener("click", () => {
  daynight.querySelector("i").classList.toggle("fa-sun");
  daynight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");

  // Save the dark mode preference to local storage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

window.addEventListener("load", () => {
  // Retrieve the dark mode preference from local storage
  const darkModePreference = localStorage.getItem("darkMode");

  if (darkModePreference === "enabled") {
    document.body.classList.add("dark");
    daynight.querySelector("i").classList.add("fa-sun");
  } else {
    document.body.classList.remove("dark");
    daynight.querySelector("i").classList.add("fa-moon");
  }
});