<?php
    $inputJson = json_decode(file_get_contents("php://input"), true);

    $name = $inputJson['name'];
    $phone = $inputJson['phone'];
    $type = $inputJson['type'];
    $text = $inputJson['text'];

    $name = htmlspecialchars($name);
    $phone = htmlspecialchars($phone);
    $type = htmlspecialchars($type);
    $text = htmlspecialchars($text);

    $name = urldecode($name);
    $phone = urldecode($phone);
    $type = urldecode($type);
    $text = urldecode($text);

    $name = trim($name);
    $phone = trim($phone);
    $type = trim($type);
    $text = trim($text);

    $message = "Имя: ".$name."\nТелефон: ".$phone."\nДолжность: ".$type."\nКомментарий: ".$text;

    $to_email = 'info@foresco.ru';

    $subject = 'Заявка с Foresco (вакансия)';
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'From: Foresco <noreply@foresco.ru>';
    mail($to_email, $subject, $message, implode("\r\n", $headers));
?>