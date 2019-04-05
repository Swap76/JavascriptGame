export default class Ball {

    constructor(){
        this.img = document.getElementById("img_ball");
        this.speed = { x:2, y:2}
        this.position = {x:10, y:10}
        this.size = 16;
    }

    draw(ctx){
        ctx.drawImage(this.img,this.position.x,this.position.y,this.size,this.size);

    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }

}