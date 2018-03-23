class PraiseButton {
    constructor(num=0) {
        this.num = num;
    }
    add() {
        this.num++;
    }
    minus() {
        this.num--;
    }
}
class Thumb extends PraiseButton {
    constructor() {
        super();
        this.tf = true;
    }

    onclick() {
        if (this.tf) {
            this.add();
            this.tf=!this.tf
        }else {
            this.minus();
            this.tf=!this.tf;
        }
        $('p').text(this.num)
    }
}
const thumb =new Thumb('p');
$('#button').click(()=>{thumb.onclick()})


