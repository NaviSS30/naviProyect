<?php
// --- Cabeceras para la API ---
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// --- Manejar preflight OPTIONS ---
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
require 'db_connection.php';

// --- Lógica del Endpoint ---

// 1. Leer los datos del cuerpo de la petición
$data = json_decode(file_get_contents("php://input"));

// 2. Validación de datos 
if (
    !isset($data->firstName) ||
    !isset($data->lastName) ||
    !isset($data->email) ||
    !isset($data->password)
) {
    http_response_code(400);
    echo json_encode(["message" => "Datos incompletos. Se requiere firstName, lastName, email y password."]);
    exit();
}

// 3. Saneamiento de los datos
$firstName = htmlspecialchars(strip_tags($data->firstName));
$lastName = htmlspecialchars(strip_tags($data->lastName));
$email = htmlspecialchars(strip_tags($data->email));
$phone = isset($data->phone) ? htmlspecialchars(strip_tags($data->phone)) : '';
$address = isset($data->address) ? htmlspecialchars(strip_tags($data->address)) : '';
$city = isset($data->city) ? htmlspecialchars(strip_tags($data->city)) : '';
$password = htmlspecialchars(strip_tags($data->password));

$passwordHash = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (first_name, last_name, email, phone, address, city, password_hash) VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

$stmt->bind_param("sssssss", $firstName, $lastName, $email, $phone, $address, $city, $passwordHash);

if ($stmt->execute()) {
    http_response_code(201);
    echo json_encode([
        "message" => "Cliente creado exitosamente.",
        "cliente_id" => $stmt->insert_id
    ]);
} else {
    http_response_code(503);
    echo json_encode(["message" => "No se pudo crear el cliente."]);
}

// --- Cierre de recursos ---
$stmt->close();
$conn->close();
?>
