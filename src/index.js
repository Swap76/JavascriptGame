import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js'

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

ctx.clearRect(0,0,800,600);

const Game_Width = 800;
const Game_Height = 600;

ctx.fillStyle = "#00f";

let paddle = new Paddle(Game_Width,Game_Height);
let ball = new Ball();

new InputHandler (paddle);

let lastTime = 0;

paddle.draw(ctx);

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;

    lastTime = timeStamp;

    ctx.clearRect(0,0,Game_Width,Game_Height);

    paddle.update(deltaTime);

    paddle.draw(ctx);

    ball.update(deltaTime);
    ball.draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);