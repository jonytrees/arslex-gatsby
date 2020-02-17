<?php
    if (!empty($_POST['submit'])) {
        if (!empty($_POST['fio']) and !empty($_POST['email']) and !empty($_POST['phone']) and !empty($_POST['message'])) {
            function tst($txt) {
                return ($txt!=''?trim(htmlspecialchars(stripslashes($txt))):'');
            }

            function phone($txt) {
                $p = array();
                preg_match_all('/[0-9]+/',$txt,$p);
                $pure = implode('',$p[0]);
                return $pure;
            }

            function email($txt) {
                $p = array();
                preg_match_all('/^[A-Za-z0-9\._-]+@[a-z0-9-]+.[a-z]+/',$txt,$p);
                $pure = implode('',$p[0]);
                return $pure;
            }

            $mess = '';
            $fio = tst($_POST['fio']);
            $company = tst($_POST['type']);
            $phone = phone($_POST['phone']);
            $email = email($_POST['email']);
            $textz = tst($_POST['message']);

            if (!empty($fio) and !empty($company) and !empty($phone) and !empty($email)) {
                require $_SERVER['DOCUMENT_ROOT'].'/phpmail/PHPMailerAutoload.php';

                $mail = new PHPMailer;

                //$mail->SMTPDebug = 3;                                                         // Enable verbose debug output

                $mail->isSMTP();                                                                // Set mailer to use SMTP
                $mail->Host         = 'ssl://smtp.yandex.ru';                                   // Specify main and backup SMTP servers
                $mail->SMTPAuth     = true;                                                     // Enable SMTP authentication
                $mail->Username     = 'zakazsite39@yandex.ru';                                  // SMTP username
                $mail->Password     = '1234wadya';                                              // SMTP password
                $mail->SMTPSecure   = 'tls';                                                    // Enable TLS encryption, `ssl` also accepted
                $mail->Port         = 465;                                                      // TCP port to connect to

                $mail->setFrom('zakazsite39@yandex.ru', 'Ars Lex Limited request');

                $mail->addAddress('jonytrees@gmail.com');                                      // Add a recipient
                                                      // Name is optional

                $mail->addReplyTo($email, 'Ars Lex Limited');
                $mail->addCC('zakazsite39@yandex.ru');
                $mail->addBCC('zakazsite39@yandex.ru');

                $mail->isHTML(true);                                                            // Set email format to HTML

                $mail->Subject = 'Ars Lex Limited';
                $mail->Body = '
                <table style="border-collapse:collapse; margin:0 auto; width:500px;">
                    <tbody>
                        <tr>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Name:</td>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$fio.'</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Type:</td>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$company.'</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Phone:</td>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$phone.'</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Email:</td>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$email.'</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Message:</td>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$textz.'</td>
                        </tr>
                    </tbody>
                </table>';

                $mail->AltBody = 'Тип: '.$company.', Имя: '.$fio.', Телефон: '.$phone.', Email: '.$email.', Дата: '.date('d.m.Y H:i').', IP: '.$_SERVER['REMOTE_ADDR'];
                if($mail->send()) {
                    $mess = $mess.'<p>Message was sent</p>';
                } else {
                    $mess = $mess."<p>Mail could not be sent!</p>";
                }
            } else {
                $mess = $mess."<p>Fill in the fields</p>";
            }
        }
    }
?>
