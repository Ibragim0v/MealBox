const elBody = document.querySelector("body");
const elMode = document.querySelector(".fa-certificate");

elMode.addEventListener("click", () => {
  elMode.classList.toggle("fa-star");
  elBody.classList.toggle("dark");
});
