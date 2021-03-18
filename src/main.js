let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/*你好，我是一名前端新人
 *接下来我要演示我的前端功底
 *首先准备一个div*/
#div1{
    border:1px solid red;
    width:100px;
    height:100px;
}
/*接下来我要把div变成八卦图
 *注意看好了
 *首先把div变成一个圆*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
 *一黑一白*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*最后添加两个⚪转换成八卦球*/
#div1::before{
    width:50px;
    height:50px;
    top:0px;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    border-radius:50%;
}
#div1::after{
    width:50px;
    height:50px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius:50%;
}
`;
let string2 = "";
let n = 0;

html.innerHTML = string.substring(0, n);

let step = () => {
    setTimeout(() => {
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);

        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        if (n < string.length - 1) {
            n += 1;
            step();
        }
        style.innerHTML = string.substring(0, n);
    }, 10)
};

step();