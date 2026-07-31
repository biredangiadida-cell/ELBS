// =========================
// ELBS JavaScript
// =========================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.25)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Animated Counters
const counters = document.querySelectorAll(".stat-box h3");

counters.forEach(counter => {

  const updateCounter = () => {

    const target = parseInt(counter.innerText.replace(/\D/g, "")) || 0;
    const current = parseInt(counter.dataset.count || "0");

    const increment = Math.max(1, Math.ceil(target / 100));

    if (current < target) {
      const next = Math.min(current + increment, target);
      counter.dataset.count = next;
      counter.innerText = counter.innerText.replace(/\d+/, next);
      setTimeout(updateCounter, 20);
    }

  };

  updateCounter();

});

console.log("ELBS Website Loaded Successfully");
