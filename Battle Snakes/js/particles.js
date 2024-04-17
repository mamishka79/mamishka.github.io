class Particle {
    constructor(game){
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.size;
        this.speedX = 1;
        this.speedY = 1;
        this.color;
        this.angle;
        this.va = Math.random() * 0.2 - 0.1;
        this.free = true;
    }
    reset(){
        this.free = true;
    }
    start(x, y, color){
        this.free = false;
        this.angle = 0;
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.floor(Math.random() * 10 + 10);
        this.speedX = Math.random() * 30 - 15;
        this.speedY = Math.random() * 3 - 1;
    }
    update(){
        if (!this.free){
            this.speedX *= 0.97;
            this.speedY -= 0.03;

            this.angle += this.va;
            this.x += Math.sin(this.angle) * this.speedX;
            this.y += this.speedY;
            if (this.size > 4) this.size -= 0.1;
            else this.reset();
        }
    }
    draw(){
        if (!this.free){
            this.game.ctx2.fillStyle = this.color;
            this.game.ctx2.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
            this.game.ctx2.strokeRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        }
    }
}
