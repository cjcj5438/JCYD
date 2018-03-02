<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "phplesson";
 
// 创建连接
$conn = new mysqli($servername, $username, $password,$dbname);
 
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}else{
	echo "ok";
}
//这里要设置数据乱码的问题

$conn->query("set names 'utf8'");
$newsTitle=$_REQUEST['newsTitle'];
$newsImg=$_REQUEST['newsImg'];
$newsContent=$_REQUEST['newsContent'];
$addTime=$_REQUEST['addTime'];
//在传入value 的时候, 拿到变量的值 ,都要转换成string
$sql="INSERT INTO phplesson.news (newsTitle, newsImg, newsContent, addTime) VALUES ('".$newsTitle."','".$newsImg."','".$newsContent."','".$addTime."')";
if($conn->query($sql)===TRUE){
	echo "新纪录插入成功";
}else{
	echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>