<?php
$host = "localhost";
$user = "root"; // seu usuário
$pass = "";     // sua senha
$db   = "mybudget";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

mysqli_set_charset($conn, "utf8");
?>
