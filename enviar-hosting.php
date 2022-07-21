<?php

    $name = $_POST["name"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $date = $_POST["date"];

    $body = "Nombre: " . $name . "<br>Apellido: " . $lastname . "<br>Correo: " .  $email . "<br>Telefono: " . $phone . "<br>Fecha de cita: " . $date;

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    $mail = new PHPMailer(true);

    try{
        //server settings
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'avtrz.io';
        $mail->SMTPAuth = true;
        $mail->Username = 'contact@avtrz.io';
        $mail->Password = 'Cholula1234';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        //recipients
        $mail->setFrom($email,$name);
        $mail->addAddress('avtrz@hexabit.one');
        //$mail->addAddress('diego1@avtrz.io');
        //content
        $mail->isHTML(true);
        $mail->Subject = 'AVTRZ Contact';
        $mail->Body = $body;

        $mail->send();
        echo '<script>
                alert("Meeting scheduled correctly");
                window.history.go(-1);

                </script>';
    } catch (Exception $e){
        echo 'Hubo un error al enviar el mensaje',$mail->ErrorInfo;
    }
?>