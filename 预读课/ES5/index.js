this.a = 20;
var p = {
    a: 30,
    test: function () {
        function s() {
            alert(this.a)
        }

        s();
    }
}
p.test();  //20 老师的理解是 拿出来执行和p 没有关系了
