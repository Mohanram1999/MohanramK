<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input data
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Handle invalid email
        header("Location:error.html");
        exit;
    }

    $to = "mohanram1728km@gmail.com";
    $subject = "Mail From website";
    $txt = "Name = $name\r\nEmail = $email\r\nMessage = $message";
    $headers = "From: noreply@yoursite.com\r\n" .
               "Reply-To: $email\r\n" .
               "CC: somebodyelse@example.com\r\n" .
               "MIME-Version: 1.0\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    if ($email != NULL) {
        if (mail($to, $subject, $txt, $headers)) {
            // Redirect to thank you page after successful email
            header("Location:thankyou.html");
        } else {
            // Handle mail sending error
            header("Location:error.html");
        }
    } else {
        // Handle null email error
        header("Location:error.html");
    }
} else {
    // Redirect to form page if accessed directly
    header("Location:form.html");
}
?>