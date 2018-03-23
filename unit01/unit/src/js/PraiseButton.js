//点赞加1
class PraiseButton {
    constructor(num=0) {
        this.num = num;
    }

    add() {
        this.num++;
        this.change(this.num)
    }

    minus() {
        this.num--;
        this.change(this.num)
    }
    change(){}
}
export default PraiseButton;