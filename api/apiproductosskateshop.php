<?php
// --- Cabeceras para la API ---
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");

// --- Inclusión de la conexión a la BD ---
require 'db_connection.php';

// --- Consulta SQL para traer todos los clientes ---
$sql = "SELECT p.id, p.name, p.description, p.price, p.image_url AS image,c.name AS category, b.name AS brand,p.rating,p.review_count as reviews, p.in_stock FROM products p JOIN brands b ON b.id = p.brand_id JOIN categories c ON c.id = p.category_id;";
$result = $conn->query($sql);

// --- Procesar el resultado ---
$products = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}

// --- Enviar la respuesta ---
http_response_code(200);
echo json_encode($products, JSON_UNESCAPED_UNICODE);

// --- Cierre de recursos ---
$conn->close();
?>
