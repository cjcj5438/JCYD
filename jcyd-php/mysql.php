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
//mysql_query("set names 'utf8'");
$conn->query("set names 'utf8'");
$sql="INSERT INTO phplesson.news (newsTitle, newsImg, newsContent, addTime) VALUES ('哈哈1123','图片地址','新闻内容','2015-09-08')";
if($conn->query($sql)===TRUE){
	echo "新纪录插入成功";
}else{
	echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>