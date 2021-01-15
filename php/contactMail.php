<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
$mail = new PHPMailer(true);
$emailMoi = 'lbouzeau@gmail.com';
$mdp = 'Rugby92:)';

try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = $emailMoi;                     // SMTP username
    $mail->Password   = $mdp;                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom($email, $prenom.' '.$nom);
    $mail->addAddress($emailMoi, $prenom.' '.$nom);     // Add a recipient
    $mail->addReplyTo($email, $prenom.' '.$nom);

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $prenom.' - '.$nom;
    $mail->Body    =  
    '<p>Prenom : '.$prenom.'</p><p>Nom : '.$nom.'</p><p>Email : '.$email.'</p><p>Téléphone : '.$telephone.'</p><p>Message : '.$message.'</p>';

    $mail->send();
} catch (Exception $e) {
    echo "Le message ne s'est pas envoyé : {$mail->ErrorInfo}";
}