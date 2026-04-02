const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");
const btn = document.getElementById("nav-btn");

// LIGHTBOX FUNCTIONALITY

const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");


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






// OPEN IMAGE
images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("show");
    lightboxImg.src = img.src;
  });
});

// CLOSE BUTTON
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

// CLICK OUTSIDE TO CLOSE
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove("show");
  }
});


