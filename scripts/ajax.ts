class AjaxTest {
    private READY_STATUS_CODE = 4;

    private isCompleted(req: XMLHttpRequest) {
        return req.readyState === this.READY_STATUS_CODE;
    }

    public httpGet(url: string, callback: (status: number, response: string) => any): void {
        let req = new XMLHttpRequest;

        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        }
        req.open("GET", url, true);
        req.send();
    }

    public httpPost(url: string, data: string, callback: (status: number, response: string) => any): void {
        let req = new XMLHttpRequest;

        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        }
        req.open("POST", url, true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(data);
    }

}

let ajax = new AjaxTest();
ajax.httpGet("http://httpbin.org/ip", (status: number, response: string) => {
    let divMain = <HTMLDivElement>document.getElementById("main");
    divMain.innerHTML = response;
})

ajax.httpPost("http://httpbin.org/post","{name: 'W. Bruno', company: 'AC'}", (status: number, response: string)=> {
    let divMain = <HTMLDivElement>document.getElementById("main");
    divMain.innerHTML = response;
})

