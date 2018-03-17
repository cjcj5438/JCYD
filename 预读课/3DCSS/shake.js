//实现手机瑶一瑶的功能
var speed=30;//speed
var x = y = z = lastX = lastY = lastZ = 0;
function deviceMotionHandler(event){
    var acceleration=event.accelerationIncludingGravity;
    x=acceleration.x;
    y=acceleration.y;
    z=acceleration.z;
    if(Math.abs(x-lastX)>speed||Math.abs(y-lastY)>speed||Math.abs(z-lastZ)>speed){
        alert(1)
    }
}
window.addEventListener("devicemotion",function (ev) {
    deviceMotionHandler(ev)
})