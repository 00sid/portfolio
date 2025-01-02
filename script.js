// script.js

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top:
            targetSection.offsetTop -
            document.querySelector(".header").offsetHeight,
          behavior: "smooth",
        });
      }
    });
  });
  // Typing animation for the "About" section
  document.addEventListener("DOMContentLoaded", () => {
    const typingTextElement = document.getElementById("typing-text");
    const typingText =
      "Hi, I'm Siddhartha, a passionate Flutter developer and tech enthusiast. Explore my work and experience below.";
    let index = 0;

    function typeEffect() {
      if (index < typingText.length) {
        typingTextElement.textContent += typingText.charAt(index);
        index++;
        setTimeout(typeEffect, 50); // Adjust typing speed here (lower value = faster)
      }
    }

    typeEffect();
  });

  // Add animations to sections on scroll
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => observer.observe(section));
});
