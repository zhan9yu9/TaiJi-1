let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/* 你好，我叫小钰
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
 */
#div{
    border:1px solid red;
    width:400px;
    height: 400px;
}

`;
let string2 = "";
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        if (string[n] === "\n") string2 += "<br>";
        else if (string[n] === " ") string2 += "&nbsp;";
        else string2 += string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 50);
};
step();

//# sourceMappingURL=index.de158e3a.js.map
