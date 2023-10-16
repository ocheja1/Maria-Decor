<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Recipient email address (your email)
    $to = "favourocheja@gmail.com";

    // Email subject
    $subject = "MARIA Contact Form Submission!!!";

    // Compose the email message
    $message = "First Name: $first_name\n"
             . "Last Name: $last_name\n"
             . "Email: $email\n"
             . "Phone: $phone\n\n"
             . "Message:\n$message";

    // Additional headers
    $headers = "From: "favourocheja@gmail.com" $email\r\n"; 

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Message could not be sent. Please try again.";
    }
}
?>
