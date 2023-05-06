// 5 input verilir. 
//   1 - Qutunun en və hündürlüyünün dəyəri.
//   2- Qutunun arxa fon rəngi
//   3 - Topun eni və hündürlüyünün dəyəri
//   4 - Topun arxa fon rəngi 
//   5 - Addım uzunluğu.
//   Göndərdiyim şahəsərə uyğun dizayn yığılsın. Düymələrin yerlərinə uyğun 8 istiqamətdə hərəkət edə bilsin. Orta düyməyə kliklədikdə topun mövqeyini resetləsin. (Top mərkəzdə başlamalıdır.). Əgər top qutunun hər hansı sərhəddinə çatdısa, o istiqamətdə hərəkət mümkün olmasın. Sağ, sol, yuxarı, aşağı hərəkətlərini klaviatura ilə də eləmək olsun/


window.onkeydown =  function ball(){
    var top = document.getElementById("ball");
    var sol = top.offsetLeft;
    var yuxari = top.offsetTop;
    var kod = event.keyCode;

// sol
    if(kod == 37 && sol>2){
        top.style.left = (sol - 5)+"px";
    }
// yuxari
    if(kod == 38 && yuxari>2){
        top.style.top = (yuxari - 5)+"px";
        }
// sag        
    if(kod == 39 && sol<271){
        top.style.left = (sol + 5)+"px";
    }
// asagi  
    if(kod == 40 && yuxari<271){
        top.style.top = (yuxari + 5)+"px";
    }
}

function up(){
    var x=document.getElementById("up").offsetTop;
    var step = 220;
    x=x-step;
    document.getElementById("ball").style.top = x + 'px';
}
function down(){
    var x=document.getElementById('down').offsetTop;
    var step = -300;
    x=x+step;
    document.getElementById("ball").style.top = x+'px';
}
function right(){
    var y=document.getElementById("right").offsetLeft; 
    var step = -500;
    y=y+step;
    document.getElementById("ball").style.left = y+'px';
}
function left(){
    var y=document.getElementById("left").offsetLeft;
    var step = 520;
    y=y-step;
    document.getElementById("ball").style.left = y+'px'; 
}
// var clear = document.getElementById("reset");
// var button = document.getElementsByTagName("button");
// clear.addEventListener("click", 0 => {
// button.forEach(button=>button.value="" );
// });
