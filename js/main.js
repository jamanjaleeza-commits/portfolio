document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.querySelector(".contacts");
  const projectsBtn = document.querySelector(".projects");
  const homeBtn = document.querySelector(".Home");
  const softwareBtn = document.querySelector(".button");
  const endBtn = document.querySelector(".end-button");

  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      window.location.href = "contact.html";
    });
  }

  if (projectsBtn) {
    projectsBtn.addEventListener("click", () => {
      window.location.href = "projects.html";
    });
  }

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  if (softwareBtn) {
    softwareBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  if (endBtn) {
    endBtn.addEventListener("click", () => {
      window.location.href = "contact.html";
    });
  }
});

  const projectsScroll = document.getElementById('projectsScroll');
  const arrowButtons = document.querySelectorAll('.project-arrow');

  arrowButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (!projectsScroll) return;
      const scrollAmount = button.classList.contains('left') ? -320 : 320;
      projectsScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });
;

 function copyEmail() {
    const email = document.getElementById("myEmail").textContent;
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    });
  }
  
const modal = document.getElementById("videoModal");
const btn = document.getElementById("openVideoBtn");
const span = document.getElementById("closeModal");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
