var ctx= document.getElementById("idcanvas").getContext('2d');

//ctx.beginPath();
//ctx.moveTo(0,0);
//ctx.lineTo(100,100);
//ctx.stroke();

cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);
cuadrado(ctx);


function cuadrado(ctx) {

    var alto=300;
    var ancho=1000;
    var x1 = Math.random();
    var y1= Math.random();
    var x2 = Math.random();
    var y2= Math.random();
    ctx.moveTo(0,0);

    var color1= Math.random()*255;
    var color2= Math.random()*255;
    var color3= Math.random()*255;

    ctx.fillStyle="rgba("+color1+","+color2+","+color3+",1)";
    x1=x1*alto;
    y1=y1*ancho;
    x2=x2*alto;
    y2=y2*ancho;
    ctx.fillRect(x1,y1,x1+x2,y1+y2);
    ctx.stroke();


}
