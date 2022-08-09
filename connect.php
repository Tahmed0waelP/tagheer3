<?php
	$db_user = 'root';
	$db_pass = '';
	$dsn = 'mysql:host=localhost;dbname=messages';

	$conn = new PDO($dsn, $db_user, $db_pass);