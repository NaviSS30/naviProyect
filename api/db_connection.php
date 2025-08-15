<?php
// db_connection.php
// Este script establece la conexión con la base de datos MySQL.

$servername = "localhost";    // Nombre del servidor de la base de datos.
$username = "root";           // Nombre de usuario para acceder a la base de datos.
$password = "";               // Contraseña del usuario.
$dbname = "skateshop";           // Nombre de la base de datos a la que nos conectamos.

// Se crea la conexión usando la extensión mysqli.
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Se verifica si la conexión fue exitosa.
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Se establece el conjunto de caracteres a UTF-8 para manejar acentos y caracteres especiales.
mysqli_set_charset($conn, "utf8");
?>
