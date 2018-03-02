<?php
/**
 * 类的声明
 */
class Person
{
	public $age;
	public function say($word){
		echo "she say {$word}";//这是php 在字符串里面赋值
	}
	public function info(){
		$this->say("hi");
		return $this->age;
	}
}
$xiaohong=new Person();
xiao
?>