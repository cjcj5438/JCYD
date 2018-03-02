<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<title>怎么获取全局的变量文件</title>
</head>
<body>
<?php
	//php 引入文件的两种方法
	include_once("c.php");//这个呢,就是一定要执行的语法,
	require_once("b.php");//这个呢,就是和php文件融为一体了.
	$a="我是外面的";
function test(){
	global $a;
	echo $GLOBALS['b'];
	echo $GLOBALS['c'];
	echo $a;
}
test()
?>	
</body>
</html>
