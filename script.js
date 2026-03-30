const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");
const btn = document.getElementById("nav-btn");
toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    if (btn.style.display === "none") {
        btn.style.display = "block"; // show
    } else {
        btn.style.display = "none"; // hide
    }
});
