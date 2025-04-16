// Mostrar el menú cuando se hace clic en el icono de hamburguesa
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
});


// Seleccionamos los elementos de Tributos y Pagos
const tributosMenu = document.getElementById('tributos');
const pagosMenu = document.getElementById('pagos');

// Función para alternar la visibilidad del submenú y la rotación de la flecha
function toggleMenu(menu) {
    menu.classList.toggle('active');
}

// Función para cerrar el submenú contrario
function closeOtherMenu(menuToKeepOpen) {
    const otherMenu = menuToKeepOpen === tributosMenu ? pagosMenu : tributosMenu;
    otherMenu.classList.remove('active');
}

// Evento de clic para el submenú "Tributos"
tributosMenu.addEventListener('click', function(e) {
    if (e.target.tagName !== 'A') { // Verificamos que no sea un enlace
        e.preventDefault();  // Prevenimos el clic solo si no es un enlace
        toggleMenu(tributosMenu);
        closeOtherMenu(tributosMenu); // Cerramos el submenú de "Pagos" si "Tributos" está abierto
    }
});

// Evento de clic para el submenú "Pagos"
pagosMenu.addEventListener('click', function(e) {
    if (e.target.tagName !== 'A') { // Verificamos que no sea un enlace
        e.preventDefault();  // Prevenimos el clic solo si no es un enlace
        toggleMenu(pagosMenu);
        closeOtherMenu(pagosMenu); // Cerramos el submenú de "Tributos" si "Pagos" está abierto
    }
});

function playVideo() {
    // Oculta la miniatura y el título
    document.querySelector('.video-thumbnail').style.display = 'none';
    document.querySelector('.video-info').style.display = 'none';

    // Muestra el iframe para reproducir el video
    document.getElementById('video-container').style.display = 'block';
}

// Función para mostrar/ocultar las respuestas y girar la flecha solo de la pregunta seleccionada
function toggleAnswer(questionId) {
    // Construir los IDs de la respuesta y la flecha a partir del ID de la pregunta
    const answerId = 'answer' + questionId.charAt(questionId.length - 1); // Obtiene el número de la pregunta
    const arrowId = 'arrow' + questionId.charAt(questionId.length - 1); // Obtiene el número de la flecha

    // Obtener los elementos por sus IDs
    const answer = document.getElementById(answerId);
    const arrow = document.getElementById(arrowId);

    // Mostrar u ocultar la respuesta y rotar la flecha
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';  // Mostrar la respuesta
        arrow.classList.add('open');  // Rotar la flecha hacia arriba
    } else {
        answer.style.display = 'none';  // Ocultar la respuesta
        arrow.classList.remove('open');  // Rotar la flecha hacia abajo
    }
}






