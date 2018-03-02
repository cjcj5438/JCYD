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
//header("Content-type:application/json;charset=utf-8"); 这里mysql版本问题可能不能这样使用
$conn->query("set names 'utf8'");

$sql="select * from news";

$result=$conn->query($sql);
//echo $result; 
while($row= $result->fetch_assoc()){
	echo $row['newsTitle']." ".$row['newsImg'];
	echo "<br />";
}

$conn->close();
?>