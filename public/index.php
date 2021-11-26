<?php
$name = htmlspecialchars($_POST['name']);
$company = htmlspecialchars($_POST['company']);
$manager = htmlspecialchars($_POST['manager']);
$id = htmlspecialchars($_POST['id']);
$select = htmlspecialchars($_POST['select']);
$address = htmlspecialchars($_POST['address']);
$number = htmlspecialchars($_POST['number']);
$inquiry = htmlspecialchars($_POST['inquiry']);

mb_language('Japanese');
mb_internal_encoding('UTF-8');
mb_send_mail($address, 'お問合せ内容', $inquiry);
?>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>お問い合わせ内容</title>
</head>

<body>
    <table>
        <thead>
            <h1>お問合せ内容</h1>
        </thead>
        <tbody>
            <tr>
                <td>お名前:</td>
                <td><?php echo $name ?></td>
            </tr>
            <tr>
                <td>会社名:</td>
                <td><?php echo $company ?></td>
            </tr>
            <tr>
                <td>担当者様:</td>
                <td><?php echo $manager ?></td>
            </tr>
            <tr>
                <td>紹介ID:</td>
                <td><?php echo $id ?></td>
            </tr>
            <tr>
                <td>プラン:</td>
                <td><?php echo $select ?></td>
            </tr>
            <tr>
                <td>メールアドレス:</td>
                <td><?php echo $address ?></td>
            </tr>
            <tr>
                <td>電話番号:</td>
                <td><?php echo $number ?></td>
            </tr>
            <tr>
                <td>お問い合わせ内容:</td>
                <td><?php echo nl2br($inquiry) ?></td>
            </tr>
        </tbody>
    </table>
</body>

</html>