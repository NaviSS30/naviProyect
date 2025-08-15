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
if (!isset($data->id) || !is_numeric($data->id)) {
    http_response_code(400);
    echo json_encode(["message" => "ID de cliente requerido y debe ser numérico."]);
    exit();
}

// 3. Saneamiento de los datos
$clientId = intval($data->id);

$checkSql = "SELECT id FROM users WHERE id = ?";
$checkStmt = $conn->prepare($checkSql);
$checkStmt->bind_param("i", $clientId);
$checkStmt->execute();
$result = $checkStmt->get_result();

if ($result->num_rows === 0) {
    http_response_code(404);
    echo json_encode(["message" => "Cliente no encontrado."]);
    $checkStmt->close();
    $conn->close();
    exit();
}

$deleteSql = "DELETE FROM users WHERE id = ?";
$deleteStmt = $conn->prepare($deleteSql);
$deleteStmt->bind_param("i", $clientId);

if ($deleteStmt->execute()) {
    if ($deleteStmt->affected_rows > 0) {
        http_response_code(200);
        echo json_encode(["message" => "Cliente eliminado exitosamente."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Error al eliminar el cliente."]);
    }
} else {
    http_response_code(503);
    echo json_encode(["message" => "No se pudo eliminar el cliente."]);
}

// --- Cierre de recursos ---
$checkStmt->close();
$deleteStmt->close();
$conn->close();
?>
