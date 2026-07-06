const menu = document.querySelector(".menu-toggle");
const nav = document.getElementById("navLinks");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});
