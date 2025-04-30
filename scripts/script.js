// Mostrar el menú cuando se hace clic en el icono de hamburguesa
document.getElementById('menu-toggle').addEventListener('click', function () {
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
tributosMenu.addEventListener('click', function (e) {
    if (e.target.tagName !== 'A') {
        e.preventDefault();
        toggleMenu(tributosMenu);
        closeOtherMenu(tributosMenu);
    }
});

// Evento de clic para el submenú "Pagos"
pagosMenu.addEventListener('click', function (e) {
    if (e.target.tagName !== 'A') {
        e.preventDefault();
        toggleMenu(pagosMenu);
        closeOtherMenu(pagosMenu);
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
    const answerId = 'answer' + questionId.charAt(questionId.length - 1);
    const arrowId = 'arrow' + questionId.charAt(questionId.length - 1);

    // Obtener los elementos por sus IDs
    const answer = document.getElementById(answerId);
    const arrow = document.getElementById(arrowId);

    // Mostrar u ocultar la respuesta y rotar la flecha
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        arrow.classList.add('open');
    } else {
        answer.style.display = 'none';
        arrow.classList.remove('open');
    }
}


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}


function handleScroll() {
    // INICIO
    const textContainer = document.querySelector('.inicio-container2');
    if (textContainer && isElementInViewport(textContainer)) {
        const textElements = textContainer.querySelectorAll('.parrafo-container2');
        textElements.forEach(el => {
            if (!el.classList.contains('visible')) {
                el.classList.add('visible');
            }
        });

    }
}

// Ejecutar la función handleScroll cuando se haga scroll
window.addEventListener('scroll', handleScroll);

// También ejecutamos handleScroll en caso de que los contenedores ya estén visibles al cargar la página
window.addEventListener('load', handleScroll);




