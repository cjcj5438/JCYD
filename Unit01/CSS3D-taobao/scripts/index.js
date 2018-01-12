var container = document.getElementById('container');
var box = document.getElementById('box');
var arr = box.getElementsByTagName('div');
var radius = calculateRadius(129, 20);
var audio = document.getElementById('audio');

for (var i = 0; i < arr.length; i++) {
	arr[i].style.background = 'url("./img/p' + (i + 1) + '.png") no-repeat';
	arr[i].style.WebkitTransform = "rotateY(" + 360 / arr.length * i + 'deg) translatez(' + radius + 'px)';
}

/**
 * //计算半径
 * @param length 图片的宽
 * @param totalNum 由20分组成
 * @returns {number} 半径\
 * TODO: 1弧度 = 360度/(2 pi) = 180度/ Pi  =>>>  1度=π/180度
 */
function calculateRadius(length, totalNum) {
	return Math.round(length / (2 * Math.tan(Math.PI / totalNum))) - 3;
	/*
	Math.round 四舍五入
	为什么要除以2 呢  因为传进来的length的
	* */
}
$('#laba').on('tap', function(e) {
	if (audio.paused) {
		audio.play();
		$('#laba').text('🎺');
	} else {
		audio.pause();
		$('#laba').text('⏸');
	}
})

var startX = 0,
	x = 0,
	endX = 0;
var flag = true;
//获取用户touchstart事件
$('#box').on('touchstart', function(event) {
		event.preventDefault();

	var touch = event.targetTouches[0];
	startX = touch.pageX - x;
})
$('#box').on('touchmove', function(event) {
	if (flag) {
		event.preventDefault();
		var touch = event.targetTouches[0];
		endX = touch.pageX;
		x = endX - startX;
		box.style.transform = 'rotateY(' + x + 'deg)';
	} else {
		return false;
	}

})
$('#box').on('touchend', function(event) {
	console.log("over");
});

// 手机自己在转的时候判断 flag的值
window.addEventListener('deviceorientation', function(event) {

	var gamma = event.gamma;
	if (Math.abs(gamma) > 1) {
		flag = false;
		box.style.transform = 'rotateY(' + gamma * 3 + 'deg)';
	} else {
		flag = true;
	}

})