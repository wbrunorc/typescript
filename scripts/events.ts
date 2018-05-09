class ClickHander{
    constructor(){
        let main = document.getElementById("main")
        let btn1 = document.getElementById("btn1")
        let btn2 = document.getElementById("btn2")

        if (main !== null && btn1 !== null && btn2 !== null) {
            main.addEventListener("click", ClickHander.alertEventMain, true);
            btn1.addEventListener("click", ClickHander.alertEventBtn1, true);
            btn2.addEventListener("click", ClickHander.alertEventBtn2, true);
        }
    }
    //capturing and bubbling
    static alertEventMain(event: any):void{
        alert("Clicked over Main");
        event.stopPropagation();
    }

    static alertEventBtn1():void{
        alert("Clicked over Btn1");
    }

    static alertEventBtn2():void{
        alert("Clicked over Btn2");
    }
}

const clickHandler = new ClickHander();