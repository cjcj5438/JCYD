<?php
class Person
{
	public $age;
	public function say($word){
		echo "she say {$word}"; //这里就像js es6字符串 的语法类似
	
	}
	public function info(){
		$this->say("hi");
		return $this->age;
	}
}
$xiaohong=new Person();
$xiaohong->age=22;
$age=$xiaohong->info();
echo $age;
?>