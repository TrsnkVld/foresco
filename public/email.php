<?php
    $inputJson = json_decode(file_get_contents("php://input"), true);

    $name = $inputJson['name'];
    $phone = $inputJson['phone'];
    $name = htmlspecialchars($name);
    $phone = htmlspecialchars($phone);
    $name = urldecode($name);
    $phone = urldecode($phone);
    $name = trim($name);
    $phone = trim($phone);

    $message = "Имя заказчика: ".$name."\nТелефон: ".$phone;

    $to_email = 'vladsmack@gmail.com';

    $subject = 'Зявка';
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'From: Tester <noreply@somedomain.com>';
    mail($to_email, $subject, $message, implode("\r\n", $headers));
?>