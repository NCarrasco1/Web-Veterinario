// Navbar

$(document).ready(function() {
    // Cambia la clase del navbar al hacer scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.mi-navbar').addClass('scrolled');
        } else {
            $('.mi-navbar').removeClass('scrolled');
        }
    });
});


// Animacion ventajas del servicio
  ScrollReveal().reveal('.animate__animated', {
    duration: 3000, // Duración de la animación en milisegundos
    origin: 'right', // Dirección de la animación
    distance: '150px', // Distancia de desplazamiento
    easing: 'ease-out', // Tipo de aceleración
    reset: true // Permite que la animación se repita cada vez que la sección vuelve a ser visible
  });
  ScrollReveal().reveal('.animate__animatedimg', {
    duration: 3000, // Duración de la animación en milisegundos
    origin: 'left', // Dirección de la animación
    distance: '150px', // Distancia de desplazamiento
    easing: 'ease-out', // Tipo de aceleración
    reset: true // Permite que la animación se repita cada vez que la sección vuelve a ser visible
  });


            
  

