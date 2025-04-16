<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    // Dirección de correo a la que se enviará el formulario
    $to = "milenabchancafe@gmail.com";
    $subject = "Nuevo mensaje de contacto: $asunto";
    $message = "
    Nombre: $nombre\n
    Teléfono: $telefono\n
    Correo: $email\n
    Asunto: $asunto\n
    Mensaje: $mensaje
    ";

    // Encabezados del correo
    $headers = "From: $email";

    // Enviar el correo
    if (mail($to, $subject, $message, $headers)) {
        // Si el correo se envía con éxito, mostrar una ventana emergente
        echo "<script type='text/javascript'>
                alert('¡Tu mensaje se ha enviado con éxito!');
                window.location = 'contactanos.html'; // Puedes redirigir a la misma página o a otra
              </script>";
    } else {
        // Si hay un error en el envío del correo, mostrar un mensaje de error
        echo "<script type='text/javascript'>
                alert('Hubo un error al enviar el mensaje. Inténtalo nuevamente.');
                window.location = 'contactanos.html'; // Puedes redirigir a la misma página o a otra
              </script>";
    }
}
?>
