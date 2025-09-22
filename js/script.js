document.addEventListener("DOMContentLoaded", () => {
  // --- función "Leer más / Leer menos" ---
  function toggleText(button) {
    const extra = button.previousElementSibling.querySelector('.extra');
    if (extra.style.display === "inline") {
      extra.style.display = "none";
      button.textContent = "Leer más";
    } else {
      extra.style.display = "inline";
      button.textContent = "Leer menos";
    }
  }
  // la hago global para que funcione en los botones inline del HTML
  window.toggleText = toggleText;

  // --- slider tipo historias ---
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".flecha.izquierda");
  const next = document.querySelector(".flecha.derecha");

  if (!slides.length) {
    console.warn("No se encontraron elementos con clase .slide");
    return;
  }

  let index = 0;

  function mostrarSlide(n) {
    index = ((n % slides.length) + slides.length) % slides.length; // evita índices fuera de rango
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  prev.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarSlide(index - 1);
  });

  next.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarSlide(index + 1);
  });

  // mostrar la primera al inicio
  mostrarSlide(0);
});
