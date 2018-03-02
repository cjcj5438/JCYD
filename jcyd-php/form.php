<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<title></title>
	<script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.js"></script>
</head>
<body>
<?php

?>
<form>
	<p>
		<label for="">用户</label>
		<input type="test" name="username" id="username" value="" />
	</p>
	
	<p>
		<label for="">密码</label>
		<input type="password" name="password" id="password" value="" />
	</p>
	<input type="submit" name="" id="btn" value="提交" />
</form>
</body>
<script type="text/javascript">
	$('#btn').click(function(e){
		e.preventDefault();
		$.ajax({
			type:"get",
			url:"formDate.php",
			dataType:'json',
			async:true,
			data:{
				username:$('#username').val()
			},
			success:function(data){
				alert(data)
				console.log(data.msg)
			},
			error:function(){
//				alert('登陆失败')
			}
		});
	})
</script>
</html>