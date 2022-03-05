<?php


$name = $_POST['username'];
$vicitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['contact_message'];

$email_from = "kumarvicku.ml";
$email_subject = "new form submisssion.";
$email_body = "user name: $name.\n".
            "user email: $visitor_email.\n".
            "user subject: $subject.\n".
            "user message: $message.\n";

            $to = "kvicku44@gmail.com";

            $headers = "from: $email_from \r\n";
            $headers .= "reply-to: $visitor_email \r\n";

            mail($to,$email_subject,$email_body,$headers);
            header("location: index.html");
?>
