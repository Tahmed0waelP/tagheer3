<?php
	include('connect.php');
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	$insertMessage = $conn->prepare('INSERT INTO messages(name, email, phone, subject, message) VALUES(?, ?, ?, ?, ?)');
	$insertMessage->execute($name, $email, $phone, $subject, $message);
	echo $insertMessage->rowCount();