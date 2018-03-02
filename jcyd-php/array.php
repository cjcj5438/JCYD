<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<title>Document</title>
</head>
<body>
<?php

$arrayTest= array('0'=>"苹果",1=>'测试'); //这里的"" ''  字符串都可以 
echo json_encode($arrayTest);//TODO:这里的json_encode 出了问题?
echo $arrayTest[0];
session_start();	
echo $_SESSION['views'];//回话之间的一个存储
?>
</body>
</html>