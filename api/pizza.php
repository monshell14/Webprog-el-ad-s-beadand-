<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

require "db.php";

$method = $_SERVER["REQUEST_METHOD"];
$data = json_decode(file_get_contents("php://input"), true);

if ($method === "OPTIONS") { exit; } // Böngésző előellenőrzés miatt kell

if ($method === "GET") {
    $stmt = $pdo->query("SELECT * FROM pizza");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_UNESCAPED_UNICODE);
    exit;
}

if ($method === "POST") {
    $stmt = $pdo->prepare("INSERT INTO pizza (nev, kategorianev, vegetarianus) VALUES (?, ?, ?)");
    $stmt->execute([ $data["nev"], $data["kat"], $data["veg"] ]);
    echo json_encode(["status" => "ok"]);
    exit;
}

if ($method === "DELETE") {
    $stmt = $pdo->prepare("DELETE FROM pizza WHERE nev = ?");
    $stmt->execute([$data["nev"]]);
    echo json_encode(["status" => "deleted"]);
    exit;
}
?>