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
