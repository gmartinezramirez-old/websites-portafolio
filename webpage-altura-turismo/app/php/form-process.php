<?php

$admin_mail = "contacto@turismoaltura.cl"
$Subject = "Nuevo mensaje";

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($admin_mail, "$Subject", $Body, "From:".$email);

// redirect to success page
if ($success) {
  echo "success";
} else {
  echo "invalid";
}

?>
