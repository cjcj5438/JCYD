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
if(false){
	$a="测试";
}
//这里和js 的语法有些不一样  js 打印变量直接就是underfand
//echo $a;
//isset 是判断变量是否被设置了 
if(isset($a)){
	echo "我是一个声明的";
}else{
	echo "我没有声明";
}
?>
</body>
</html>
