var x=1;
function foo() {
    var y=1+x;
    return function () {
        var z=1+y;
        return z;
    }
}
foo()();