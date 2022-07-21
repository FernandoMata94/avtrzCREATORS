<?php
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $date = $_POST["date"];

    $body = "Correo: " . $email . "<br>Nombre: " . $name . "<br>Telefono: " . $phone . "<br>Fecha de cita: " . $date;

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
        $mail->setFrom($email,'Cita agendada');
        $mail->addAddress('avtrz@hexabit.one');
        //$mail->addAddress('diego1@avtrz.io');
        //content
        $mail->isHTML(true);
        $mail->Subject = 'AVTRZ Contact';
        $mail->Body = $body;

        $mail->send();
        echo '<script>
                alert("Meeting scheduled correctly.");
                window.history.go(-1);

                </script>';
    } catch (Exception $e){
        echo 'Hubo un error al enviar el mensaje',$mail->ErrorInfo;
    }
?>