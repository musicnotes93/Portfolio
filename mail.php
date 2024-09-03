<?php
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once 'vendor/autoload.php';

$mail = new PHPMailer(true);

//Configure an SMTP
$mail->isSMTP();
$mail->Host = "smtp.gmail.com";
$mail->SMTPAuth = true;
$mail->Username = "malloryphillipsviolin@gmail.com";
$mail->Password = "ubqc zskx okit tvsz";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

// Sender information
$mail->setFrom($email, $fname, $lname);

// Multiple recipient email addresses and names
// Primary recipients
$mail->addAddress('malloryphillipsviolin@gmail.com', 'Mallory'); 


$mail->isHTML(false);

$mail->Subject = 'Form submission';

$mail->Body = $message;


if (!$mail->send()) {
    header("Location:notsent.html");
} else {
    header("Location:sent.html");
}


$mail->smtpClose();



