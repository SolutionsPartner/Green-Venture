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


const faqs = document.querySelectorAll(".faq-question");

faqs.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    answer.style.maxHeight = 
      answer.style.maxHeight ? null : answer.scrollHeight + "px";
  });
});
