document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".link-card");
  const clickSound = document.getElementById("8bit-click.mp3");
  const hoverSound = document.getElementById("8bit-hover.mp3");

  // Enable audio only after first user interaction
  function enableAudioPlayback() {
    document.body.removeEventListener("click", enableAudioPlayback);
    if (hoverSound) hoverSound.play().catch(() => {});
    if (clickSound) clickSound.play().catch(() => {});
  }

  document.body.addEventListener("click", enableAudioPlayback);

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      if (hoverSound) {
        hoverSound.currentTime = 0;
        hoverSound.play();
      }
    });

    card.addEventListener("mousedown", () => {
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
      }
      card.style.transform = "scale(0.95)";
    });

    card.addEventListener("mouseup", () => {
      card.style.transform = "scale(1.08)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });
});
