class Functor{
    constructor(val){
        this.val=val;
    }
    map(f){
        return new Functor(f(this.val))
    }
}
class Either extends Functor {
    constructor(left, right) {
        super(left, right);
        this.left = left;
        this.right = right;
    }

    map(f) {
        return this.right ? Either.of(this.left, f(this.right)) : Either.of(f(this.left), this.right);
    }
}

Either.of = function (left, right) {
    return new Either(left, right);
};
var addOne=function (x) {
    return x+1;
};
Either.of(5,6).map(addOne);
// Either.of(1,null).map(addOne);
// Either.of({address: "xxxx"}, currentUser.address).map(updataField);
