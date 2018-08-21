var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
document.body.style.backgroundColor = "#FF7457";


var x1 = document.querySelector('#lengthid');
var x2 = document.querySelector('#breadthid');
var y = document.querySelector('#heightid');
// var color = document.querySelector('#color');


function draw(){
    //clearing our context.
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //to jump the cube we would use math.sin :-
    var jump = Math.sin(Date.now()/1000)*window.innerHeight/15;
    var slide = Math.tan(Date.now()/1000)*window.innerWidth/20;

    drawShape(
    window.innerWidth/2 + slide,
    window.innerHeight/2 + jump ,
    Number(x1.value),
    Number(x2.value),
    Number(y.value),
    color = 'rgb(255, 255, 255)'
  );
  requestAnimationFrame(draw);

}
draw();





function drawShape(x, y, wx, wy, h, color) {

    //MAKING FIRST PETAL:-
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = 'rgb(255, 153, 51)';
    ctx.fill();



    //MAKING SECOND PETAL:-
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wy, y - wy * 0.5);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.closePath();
    ctx.fillStyle = 'rgb(0, 255,0)';
    ctx.stroke();
    ctx.fill();

    //MAKING THIRD PETAL:-
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wx/2, y - h - wy*0.98);
    ctx.lineTo(x - wx/2, y - h - wy*0.98);
    ctx.closePath();
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.stroke();
    ctx.fill();


    //Making Batch Circle:-
    ctx.beginPath();
    ctx.arc(x , y - h/2, (wx + wy), 0, 2*Math.PI);
    ctx.stroke();


//     //REVOLUTION 360 degrees
//     var angle = 0;
//     window.setInterval(draw(){
//     angle = (angle + 1) % 360;
//     // ctx.clearRect(0, 0, canvas.width, canvas.height);
//     //
//     // dc.save();
//     // dc.fillStyle = "#FF0000";
//
//     ctx.translate(150,200);
//     ctx.rotate( angle*Math.PI/180 );
//     ctx.translate(-150,-200);
//
//     ctx.beginPath();
//     ctx.moveTo(100, 100);
//     ctx.lineTo(200, 100);
//     ctx.lineTo(200,300);
//     ctx.lineTo(100,300);
//     ctx.closePath();
//     ctx.fill();
//
//     ctx.restore();
// }, 5);





  }
