<?php

if (isset($_GET["name"]) && isset($_GET["tel"])) {

  $from       = "admin@discoverservice.ru";
  $headers    = "Content-type: text/html; charset=utf-8 \r\n";
  $headers   .= "From: $from";
  $topic      = "test zadanie";
  $message    = $_GET["name"] ." ". $_GET["tel"];
  $email      = "rbru-metrika@yandex.ru";

  $sad = mail($email, $topic, $message, $headers);
  http_response_code(200);
} else {
  http_response_code(400);
}
?>