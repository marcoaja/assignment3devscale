const Typed = require("typed.js");

const typed = new Typed("#typed", {
  strings: ["Web Development.", "App Development.", "Cloud Computing."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

const active = [
  "max-w-fit",
  "gap-x-48",
  "rounded-full",
  "mt-10",
  "bg-primary-500/70",
  "shadow-lg",
  "backdrop-blur-xl",
  "text-primary-800",
  "transition-all",
  "duration-1000",
];
const navbar = document.getElementById("navbar");
window.onscroll = () => {
  if (window.scrollY > 0) {
    active.forEach((cls) => {
      navbar.classList.add(cls);
    });
  } else {
    active.forEach((cls) => {
      navbar.classList.remove(cls);
    });
  }
};
