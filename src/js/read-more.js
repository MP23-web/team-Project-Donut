// Скрипт для read more/less
const btn = document.querySelector(".read-more-btn");
const doptext = document.querySelector(".about-wrapper__text--more");
btn.addEventListener("click", () => {
  doptext.classList.toggle("is-open");
  if (doptext.classList.contains("is-open")) btn.textContent = "Less";
  else btn.textContent = "Read more";
});