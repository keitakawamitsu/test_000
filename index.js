var ball = document.getElementById("ball");

ball.style.position = "absolute";//ここは、ポジションをアブソリュートにしてるってことよね？

ball.ondragstart = (event) => {
    return false;
    //ここの処理、よくわからん
    //恐らく、ドラッグが始まった時、何もしないよ
    //っ処理なのかもしれないです
}


ball.onmousedown = function (event) {
    document.addEventListener("mousemove", onMouseMove);
}
var onMouseMove = function (event) {
    let x = event.clientX;//イベントが起きたときのX座標を参照
    //console.log(x+'X座標を表示');
    let y = event.clientY;
    //console.log(y+'Y座標を表示');
    let width = ball.offsetWidth;
    let height = ball.offsetHeight;

    //console.log(width + 'オフセット');
    //console.log(height + 'オフセット');

    ball.style.top = (y - height / 2) + "px";
    ball.style.left = (x - width / 2) + "px";

    /*
    ball.style.top = y + "px";//座標をそのまま持ってくるのは無理っぽい
    ball.style.left = x + "px";
    */

    ball.onmouseup = function (event) {
        //app.removeChild(ball);
        document.removeEventListener("mousemove", onMouseMove);//マウスが離れたとき、画像を離す
    }

}
console.log('チェックログ');//デバック用のチェックログ