// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Copy email
function copyEmail() {
  navigator.clipboard.writeText("rivelioagency@gmail.com");
  alert("Email copied!");
}

// Mobile menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Open YouTube video
function openVideo(videoId) {
  window.open(`https://youtu.be/${videoId}`, "_blank");
}

// Scroll reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});


// 🔥 AUDIO SYSTEM (FINAL)

document.addEventListener("DOMContentLoaded", () => {

  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");
  const slider = document.getElementById("volumeSlider");

  if (!music || !btn) return;

  // initial state
  music.muted = true;
  music.volume = 0.15;

  if (slider) {
    slider.value = 0.15;
  }

  // toggle button
  btn.addEventListener("click", () => {
    if (music.muted) {
      music.muted = false;
      music.play();
      btn.innerText = "🔊";
      document.body.classList.add("music-on");
    } else {
      music.muted = true;
      btn.innerText = "🔇";
      document.body.classList.remove("music-on");
    }
  });

  // unlock autoplay
  document.body.addEventListener("click", () => {
    music.play();
  }, { once: true });

  // volume slider
  if (slider) {
    slider.addEventListener("input", () => {
      music.volume = slider.value;

      // optional: auto unmute when user increases volume
      if (music.muted && slider.value > 0) {
        music.muted = false;
        btn.innerText = "🔊";
        document.body.classList.add("music-on");
      }
    });
  }

});