// ===========================
// ELBS JavaScript
// ===========================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Navbar Shadow
window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  if (window.scrollY > 30) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }

});

// Fade Animation
const observer = new IntersectionObserver(entries => {

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

// Counter Animation
const counters = document.querySelectorAll(".stat-box h3");

counters.forEach(counter => {

  const text = counter.textContent;

  const target = parseInt(text.replace(/\D/g, ""));

  if (isNaN(target)) return;

  const suffix = text.replace(/[0-9]/g, "");

  let count = 0;

  const speed = Math.ceil(target / 80);

  function update() {

    count += speed;

    if (count >= target) {

      counter.textContent = target + suffix;

    } else {

      counter.textContent = count + suffix;

      requestAnimationFrame(update);

    }

  }

  update();

});

console.log("ELBS Loaded Successfully");
