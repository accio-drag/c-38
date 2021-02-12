var canvas, backgroundImage;
var allPlayers;
var gameState = 0;
var playerCount;

var database;
var car1 , car2 , car3, car4;
var cars=[];

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function preload(){
 car1i = loadImage("images/car1.png") 
 car2i = loadImage("images/car2.png") 
 car3i = loadImage("images/car3.png") 
 car4i = loadImage("images/car4.png") 
 grndi = loadImage("images/ground.png") 
 bgi = loadImage("images/background.jpg") 
 strtbg = loadImage("images/startbg.png") 
 tracki = loadImage("images/track.jpg") 
}

function draw(){
  background(255,255,255)
if(playerCount===4){
game.update(1);


}
if(gameState===1){
  game.play()
}
if(gameState===2){
  game.end()
}

}
