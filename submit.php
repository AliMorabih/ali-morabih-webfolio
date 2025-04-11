<?php
// Check for empty fields
if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    echo "No arguments Provided!";
    return false;
}

$name = strip_tags($_POST['name']);
$email_address = strip_tags($_POST['email']);
$phone = strip_tags($_POST['phone']);
$message = strip_tags($_POST['message']);

// Create the email and send the message
$to = 'alimorabih@outlook.com'; // Replace with your email address
$email_subject = "Email Received From Portfolio: $name";
$email_body = "You have received a new message from your website contact form.\n\n" .
              "Here are the details:\n\n" .
              "Name: $name\n\n" .
              "Email: $email_address\n\n" .
              "Phone: $phone\n\n" .
              "Message:\n$message";
$headers = "From: noreply@yourdomain.com\n"; // Replace with your domain
$headers .= "Reply-To: $email_address";

if (mail($to, $email_subject, $email_body, $headers)) {
    echo "Message sent successfully!";
    return true;
} else {
    echo "Message could not be sent.";
    return false;
}
?>