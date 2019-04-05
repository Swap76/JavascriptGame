import Game from './game.js';

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

ctx.clearRect(0,0,800,600);

const Game_Width = 800;
const Game_Height = 600;

let game = new Game(Game_Width,Game_Height);
game.start();

ctx.fillStyle = "#00f";

let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;

    lastTime = timeStamp;

    ctx.clearRect(0,0,Game_Width,Game_Height);

    game.update(deltaTime);

    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);