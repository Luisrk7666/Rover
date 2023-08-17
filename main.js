canvas = document.getElementById("lienzo");
ctx = canvas.getContext("2d");
imagenesmarte = ["marte1.jpg", "marte2.jpg", "marte3.jpg", "marte4.jpg"];
randomnumber = Math.floor(Math.random() * 4);
console.log(randomnumber);
imagenfondo = imagenesmarte[randomnumber]

imagenrover = "rover.png";
console.log(imagenfondo)
roverancho = 100;
roveralto = 90;
roverx = 10;
rovery = 10;

function agregar() {
    fondoImgNvo = new Image();
    fondoImgNvo.onload = uploadBackground;
    fondoImgNvo.src = imagenfondo;

    roverImgNvo = new Image();
    roverImgNvo.onload = uploadrover;
    roverImgNvo.src = imagenrover;
}
function uploadBackground() {
    ctx.drawImage(fondoImgNvo,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(roverImgNvo, roverx, rovery, roverancho,roveralto);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "37") {
        left();
        console.log("left")
    }
    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
}
function left() {
    if (roverx >= 0) {
        roverx = roverx - 10;
        uploadBackground();
        uploadrover();
    }
}
function up(){
    if (rovery>=0){
   rovery = rovery-10;
   uploadBackground();
   uploadrover();
    }
}
function right(){
if (roverx<=700){
    roverx = roverx+10;
    uploadBackground();
    uploadrover();
}
}
function down(){
if (rovery<=500){
    rovery = rovery+10;
    uploadBackground();
    uploadrover();
}
}








