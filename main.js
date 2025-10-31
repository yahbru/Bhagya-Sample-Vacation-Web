document.addEventListener("DOMContentLoaded", () => {
  // 🎬 Video Modal (Single Link)
  const videoLink = document.querySelector(".header__btns .video-trigger");
  const modal = document.getElementById("videoModal");
  const closeBtn = document.querySelector(".close");
  const player = document.getElementById("youtubePlayer");

  if (videoLink && modal && closeBtn && player) {
    videoLink.addEventListener("click", (e) => {
      e.preventDefault();
      const videoURL = videoLink.getAttribute("href");
      const embedURL = videoURL.replace("watch?v=", "embed/");
      player.src = `${embedURL}?autoplay=1`;
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      player.src = "";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        player.src = "";
      }
    });
  }

  // 🎥 Video Popup (Multiple Triggers)
  const triggers = document.querySelectorAll(".video-trigger");
  const popup = document.getElementById("videoPopup");
  const iframe = document.getElementById("youtubeFrame");
  const vcloseBtn = document.querySelector(".close-btn");

  if (triggers.length && popup && iframe && vcloseBtn) {
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const videoId = trigger.getAttribute("data-video-id");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0`;
        popup.style.display = "flex";
      });
    });

    vcloseBtn.addEventListener("click", () => {
      iframe.src = "";
      popup.style.display = "none";
    });
  }

  // 🍔 Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (menuBtn && navLinks) {
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-line"
      );
    });

    navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
  }

  // 🔐 Auth Modal Logic
  const toggleBtn = document.getElementById("auth-toggle");
  const closeAuthBtn = document.getElementById("auth-close");
  const backdrop = document.getElementById("auth-backdrop");
  const authWrapper = document.getElementById("auth-wrapper");
  const signUpBtn = document.getElementById("auth-signup-btn");
  const signInBtn = document.getElementById("auth-signin-btn");

  if (
    toggleBtn &&
    closeAuthBtn &&
    backdrop &&
    authWrapper &&
    signUpBtn &&
    signInBtn
  ) {
    // Open modal
    toggleBtn.addEventListener("click", () => {
      authWrapper.style.display = "block";
      backdrop.style.display = "block";
    });

    // Close modal
    const closeAuth = () => {
      authWrapper.style.display = "none";
      backdrop.style.display = "none";
    };

    closeAuthBtn.addEventListener("click", closeAuth);
    backdrop.addEventListener("click", closeAuth);

    // Switch panels
    signUpBtn.addEventListener("click", () => {
      authWrapper.classList.add("auth-active");
    });

    signInBtn.addEventListener("click", () => {
      authWrapper.classList.remove("auth-active");
      toggleBtn.textContent = "Signed In";
    });
  }
});
