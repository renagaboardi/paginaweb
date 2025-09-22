document.addEventListener("DOMContentLoaded", () => {
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
