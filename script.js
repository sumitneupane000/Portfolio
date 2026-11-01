// Add your real contact details here.
const portfolioEmail = ""; // Example: "sumit@example.com"
const portfolioLinkedIn = ""; // Example: "https://www.linkedin.com/in/your-profile/"

document.addEventListener("DOMContentLoaded", () => {
  const roles = ["Web Developer", "Networking Enthusiast", "Problem Solver", "Lifelong Learner"];
  let roleIndex = 0;
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    document.getElementById("role").textContent = roles[roleIndex];
  }, 2500);

  const nav = document.getElementById("nav");
  const menu = document.getElementById("menuToggle");
  menu.addEventListener("click", () => {
    nav.classList.toggle("open");
    menu.textContent = nav.classList.contains("open") ? "✕" : "☰";
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open"); menu.textContent = "☰";
  }));

  document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.getElementById("themeToggle").textContent =
      document.body.classList.contains("light") ? "☾" : "☼";
  });

  document.querySelectorAll(".filters button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach(b => b.classList.remove("selected"));
      button.classList.add("selected");
      const filter = button.dataset.filter;
      document.querySelectorAll(".projects article").forEach(card => {
        card.classList.toggle("hidden", filter !== "all" && card.dataset.type !== filter);
      });
    });
  });

  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll("nav a");
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) links.forEach(link =>
      link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
  }), { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => observer.observe(section));

  if (portfolioLinkedIn) {
    const link = document.querySelector(".linkedin");
    link.href = portfolioLinkedIn; link.target = "_blank"; link.rel = "noopener";
  } else document.querySelector(".linkedin").style.display = "none";

  const emailCard = document.querySelector(".email-card");
  if (portfolioEmail) {
    emailCard.href = "mailto:" + portfolioEmail;
    emailCard.querySelector("strong").textContent = portfolioEmail;
  }

  document.getElementById("year").textContent = new Date().getFullYear();
});