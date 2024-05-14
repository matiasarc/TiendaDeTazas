//codigo para hacer la transicion a las secciones de mi nav mas suave
document.addEventListener("DOMContentLoaded", function() {
    // Agrega un evento de clic a todos los enlaces del menú
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Evita el comportamiento predeterminado de los enlaces

            // Obtiene el destino del enlace (el ID de la sección a la que se quiere desplazar)
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            // Desplaza suavemente hasta la sección destino
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
});