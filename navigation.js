const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// Agrega un event listener al documento para cerrar el menú cuando se hace clic fuera de él
document.addEventListener("click", (event) => {
    const isClickInsideNav = nav.contains(event.target) || navToggle.contains(event.target);

    if (!isClickInsideNav) {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

// Event listener para abrir/cerrar el menú cuando se hace clic en el botón de alternar
navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

// Agrega un event listener al documento para cerrar el menú cuando se hace clic en el icono de tache
const closeIcon = document.querySelector(".close-icon");
closeIcon.addEventListener("click", () => {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
});

// Evita que el clic en el menú propague al documento y lo cierre inmediatamente
nav.addEventListener("click", (event) => {
    event.stopPropagation();
});
