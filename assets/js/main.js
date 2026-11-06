const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
const button = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (button && nav) {
  const close = () => {
    nav.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  };
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}
