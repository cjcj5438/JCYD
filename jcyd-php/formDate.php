<?php
	//接受form表单数据
	header("Content-type: application/json; charset=utf-8"); 
//	echo $_GET['username'];
	$_REQUEST['username']; //$_REQUEST和$_GET和$_POST一样是一劳永逸的方法
	if($username="admin"){
		//一般情况下, echo 出一个东西就够了. 不然前台ajax 的data 不好接受的
//		echo "登陆成功";
		echo json_encode(array('msg'=>'登陆成功','errorCode'=>'ok'));
	}else{
//		echo "登陆失败";
		echo json_encode(array('msg'=>'登陆失败','errorCode'=>'err'));
	}
?>