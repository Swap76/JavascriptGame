import Paddle from './paddle.js';


let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

ctx.clearRect(0,0,800,600);

const Game_Width = 800;
const Game_Height = 600;

ctx.fillStyle = "#00f";

let paddle = new Paddle(Game_Width,Game_Height);

paddle.draw(ctx);