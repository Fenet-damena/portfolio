const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

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
      style.disabled = false; 
    } else {
      style.setAttribute("disabled", "true");
      style.disabled = true; 
    }
  });

 
  localStorage.setItem("selectedColor", color);
}

const daynight = document.querySelector(".day-night");
daynight.addEventListener("click", () => {
  daynight.querySelector("i").classList.toggle("fa-sun");
  daynight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("load", () => {
  const themePreference = localStorage.getItem("theme");
  const selectedColor = localStorage.getItem("selectedColor");

  if (themePreference === "dark") {
    document.body.classList.add("dark");
    daynight.querySelector("i").classList.add("fa-sun");
  } else {
    document.body.classList.remove("dark");
    daynight.querySelector("i").classList.add("fa-moon");
  }

  if (selectedColor) {
    setActiveStyle(selectedColor);
  }
});