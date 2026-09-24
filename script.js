// ============================================================
// INVITACIÓN DE ABY
// ============================================================
// Cuando tengas desplegado el Google Apps Script incluido en
// "google-apps-script.gs", pega aquí la URL que termina en /exec.
// Mientras esté vacío, el formulario funciona en MODO DEMO.
// ============================================================

const GOOGLE_SCRIPT_URL = "";

const modal = document.getElementById("rsvpModal");
const openButtons = [
  document.getElementById("openRsvp"),
  document.getElementById("openRsvpBottom")
].filter(Boolean);
const closeButtons = modal.querySelectorAll("[data-close-modal]");
const form = document.getElementById("rsvpForm");
const fullName = document.getElementById("fullName");
const submitButton = document.getElementById("submitRsvp");
const formStatus = document.getElementById("formStatus");
let lastFocused = null;

function openModal() {
  lastFocused = document.activeElement;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  window.setTimeout(() => fullName.focus(), 40);
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

openButtons.forEach((button) => button.addEventListener("click", openModal));
closeButtons.forEach((button) => button.addEventListener("click", closeModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

function normalizeName(value) {
  return value.trim().replace(/\s+/g, " ");
}

function isValidFullName(value) {
  const clean = normalizeName(value);
  const words = clean.split(" ").filter(Boolean);
  return clean.length >= 5 && words.length >= 2;
}

function showStatus(message, isError = false) {
  formStatus.textContent = message;
  formStatus.classList.toggle("is-error", isError);
}

function burstConfetti() {
  const colors = ["#e90070", "#f27a16", "#f2b818", "#0d8b8f", "#7136a4"];
  const originX = window.innerWidth / 2;
  const originY = Math.min(window.innerHeight * 0.66, window.innerHeight - 130);

  for (let i = 0; i < 32; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${originX}px`;
    piece.style.top = `${originY}px`;
    piece.style.background = colors[i % colors.length];

    const angle = (Math.PI * 2 * i) / 32;
    const distance = 90 + Math.random() * 150;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance - 40;

    piece.style.setProperty("--x", `${x}px`);
    piece.style.setProperty("--y", `${y}px`);
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 950);
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const cleanName = normalizeName(fullName.value);
  if (!isValidFullName(cleanName)) {
    showStatus("Escribe tu nombre y al menos un apellido para confirmar.", true);
    fullName.focus();
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Guardando confirmación...";
  showStatus("");

  const formData = new FormData(form);
  formData.set("nombre", cleanName);
  formData.set("fechaRegistro", new Date().toISOString());

  try {
    if (GOOGLE_SCRIPT_URL.trim()) {
      // no-cors evita bloqueos del navegador con el Web App de Apps Script.
      // El script recibe y guarda la información aunque el navegador no pueda
      // leer la respuesta.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      showStatus("¡Listo! Tu asistencia quedó registrada. 🎉");
    } else {
      // Modo demostración: no promete haber escrito en Google Sheets.
      // Solo permite probar toda la experiencia visual y el formulario.
      showStatus("¡Confirmación recibida! Modo prueba: falta conectar Google Sheets. 🎉");
    }

    burstConfetti();
    form.reset();

    window.setTimeout(() => {
      closeModal();
      showStatus("");
    }, 2100);
  } catch (error) {
    console.error(error);
    showStatus("No pudimos guardar la confirmación. Intenta de nuevo en un momento.", true);
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Sí, confirmo mi asistencia 🎉";
  }
});

// Reveal animations on scroll.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Days remaining until the calendar date (not a specific party time).
function updateDaysLeft() {
  const target = new Date(2026, 9, 31); // 31 Oct 2026 in the visitor's local calendar.
  const today = new Date();
  const startToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const diff = Math.ceil((target - startToday) / 86400000);
  const node = document.getElementById("daysLeft");
  node.textContent = String(Math.max(0, diff));
}

updateDaysLeft();
