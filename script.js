function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function copyEmail() {
  navigator.clipboard.writeText("rivelioagency@gmail.com");
  alert("Email copied!");
}

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

function openVideo() {
  window.open("https://youtu.be/zKz2o3TJ9Iw", "_blank");
}

/* scroll reveal animation */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});