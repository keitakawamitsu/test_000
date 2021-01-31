
getImg = function () {
    var ball = document.getElementById("ball");
    var eye_01 = document.getElementById("eye_01");

    let list = [ball, eye_01];

    //console.log(ball);
    //console.log(eye_01);
    //console.log("AAAA");
    return list;
}
//console.log(getImg()[1]);



//ball.style.position = "absolute";//ここは、ポジションをアブソリュートにしてるってことよね？

let imgNum = 0;//数値を変えたらドラッグできる画像が変わる

getImg()[imgNum].ondragstart = (event) => {
    return false;
    //ここの処理、よくわからん
    //恐らく、ドラッグが始まった時、何もしないよ
    //っ処理なのかもしれないです
}


getImg()[imgNum].onmousedown = function (event) {
    document.addEventListener("mousemove", onMouseMove);
}
var onMouseMove = function (event) {
    getImg()[imgNum].style.position = "absolute";
    let x = event.clientX;//イベントが起きたときのX座標を参照
    //console.log(x+'X座標を表示');
    let y = event.clientY;
    //console.log(y+'Y座標を表示');
    let width = getImg()[imgNum].offsetWidth;
    let height = getImg()[imgNum].offsetHeight;

    //console.log(width + 'オフセット');
    //console.log(height + 'オフセット');

    getImg()[imgNum].style.top = (y - height / 2) + "px";
    getImg()[imgNum].style.left = (x - width / 2) + "px";

    getImg()[imgNum].onmouseup = function (event) {
        //app.removeChild(ball);
        document.removeEventListener("mousemove", onMouseMove);//マウスが離れたとき、画像を離す
    }

}
console.log('チェックログ');//デバック用のチェックログ

