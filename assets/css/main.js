document.addEventListener("DOMContentLoaded", () => {
  const animalAudio = document.getElementById("animalSound");
  const clickAudio = document.getElementById("clickSound");
  const soundToggleBtn = document.getElementById("soundToggle");
  let isMuted = false;

  // 1. Toggle Mute / Unmute
  soundToggleBtn.addEventListener("click", () => {
    isMuted = !isMuted;
    if (isMuted) {
      soundToggleBtn.textContent = "🔇 Sound OFF";
      soundToggleBtn.style.opacity = "0.6";
    } else {
      soundToggleBtn.textContent = "🔊 Sound ON";
      soundToggleBtn.style.opacity = "1";
      playClickSound();
    }
  });

  // Function pemutar suara click
  function playClickSound() {
    if (!isMuted && clickAudio) {
      clickAudio.currentTime = 0;
      clickAudio.play().catch(() => {});
    }
  }

  // Function pemutar suara hewan/magic
  function playAnimalSound() {
    if (!isMuted && animalAudio) {
      animalAudio.currentTime = 0;
      animalAudio.volume = 0.4; // Volume 40% agar tidak kaget
      animalAudio.play().catch(() => {});
    }
  }

  // 2. Mainkan Suara Saat Elemen Hewan Lewat
  const animals = document.querySelectorAll(".space-animal");
  animals.forEach((animal) => {
    animal.addEventListener("animationstart", () => {
      playAnimalSound();
    });
    animal.addEventListener("animationiteration", () => {
      playAnimalSound();
    });
  });

  // 3. Efek Suara Click pada Tombol & Skill Pill
  const interactiveElements = document.querySelectorAll(".skill-pill, .social-btn, .submit-btn, .nav-links a");
  interactiveElements.forEach((el) => {
    el.addEventListener("click", () => {
      playClickSound();
    });
  });
});