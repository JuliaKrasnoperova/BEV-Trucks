<?php
$fio = $_POST['FIO'];
$phone = $_POST['PHONE'];
$text = $_POST['TEXT'];
$headers = 'From: info@Bashmakoff61@yandex.ru';
mail("Bashmakoff61@yandex.ru", "Заявка с сайта bevtrucks.ru", "ФИО:" . $fio . ". Телефон: " . $phone . ". Сообщение от пользователя: " . $text, $headers);


header("Location: thankyou.html");
exit();
