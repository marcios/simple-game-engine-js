import { GameObject } from "../game-engine/GameObject.js";

export class Ball extends GameObject {
    constructor(size=20){
        super(50,50,size,size);
        this.speed = 5;
        this.size = size;

    }
    update(){
        
        if(this.input.onKey(this.input.key.LEFT) && this.left > this.game.canvas.left ) {
            this.x -= this.speed;
        }

        if(this.input.onKey(this.input.key.RIGTH) && this.right < this.game.canvas.right) {
            this.x += this.speed;
        }

        if(this.input.onKey(this.input.key.UP) &&  this.top > this.game.canvas.top) {
            this.y -= this.speed;
        }

        if(this.input.onKey(this.input.key.DOWN) &&  this.bottom < this.game.canvas.bottom) {
            this.y += this.speed;
        }
    }
    draw(){
        this.drawing.drawCircle(this.center.x, this.center.y,this.size);
    }
}