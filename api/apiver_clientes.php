<?php
// --- Cabeceras para la API ---
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");

// --- Inclusión de la conexión a la BD ---
require 'db_connection.php';

// --- Consulta SQL para traer todos los clientes ---
$sql = "SELECT id, first_name, last_name, email, phone, address, city, created_at FROM users ORDER BY created_at DESC;";
$result = $conn->query($sql);

// --- Procesar el resultado ---
$users = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

// --- Enviar la respuesta ---
http_response_code(200);
echo json_encode($users, JSON_UNESCAPED_UNICODE);

// --- Cierre de recursos ---
$conn->close();
?>




  
