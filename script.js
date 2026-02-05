const playBtn = document.getElementById("playBtn");
const landing = document.getElementById("landing");
const experience = document.getElementById("experience");

const hotspotText = document.getElementById("hotspotText");
const chips = document.querySelectorAll(".chip");

// Landing -> Experience
playBtn.addEventListener("click", () => {
  landing.classList.add("hidden");
  experience.classList.remove("hidden");
  experience.setAttribute("aria-hidden", "false");

  // Small UX touch: start with a gentle default message
  hotspotText.textContent = "Tap an icon to reveal a little note.";
});

// Hotspots
chips.forEach((btn) => {
  btn.addEventListener("click", () => {
    hotspotText.textContent = btn.dataset.text;
  });
});
