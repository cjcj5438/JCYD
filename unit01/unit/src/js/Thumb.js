import PraiseButton from './PraiseButton.js';

class Thumb extends PraiseButton {
    constructor(select) {
        super();
        this.tf = true;
        this.changeNum = $("p").text(this.num);
        alert(1)
    }

    onAdd() {
        if (this.tf) {
            this.add();
            this.tf=!this.tf
            console.log("加一次",this.tf)
        }
    }
    onMinus(){
        if(!this.tf){
            this.minus();
            this.tf=!this.tf;
            console.log("减一次",this.tf)
        }
    }

    change(select) {
        $(select).text(this.changeNum);
    }
}
export default Thumb;