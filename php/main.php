<?php
if (isset($_POST['submitContact'])){
    $prenom = htmlspecialchars($_POST['prenom']);
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $message = htmlspecialchars($_POST['message']);
    if (($prenom != '') && ($nom != '') && ($email != '') && ($telephone != '') && ($message != '')){
        include 'php/contactMail.php';
    }
    Header("Location: index.php");
}