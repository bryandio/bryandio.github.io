var game;
var player;
var walk;
var block;


function Player(){
    tPlayer = new Sprite( game, "p1_front.png", 50, 50);
    tPlayer.setSpeed(0);
    tPlayer.setPosition(100, 400);
    tPlayer.falling = true;
    
    tPlayer.checkKeys = function(){
        if (keysDown[K_LEFT]){
            this.changeXby(-10);
        }
        
        if (keysDown[K_RIGHT]){
            this.changeXby(10);
        }
        if (keysDown[K_UP]){
            if (this.falling === false){
                this.changeImage("p1_jump.png");
                this.changeYby(-10);
                this.falling === true;
                this.addVector(0, 30);
            }
            }else{
                
            checkFalling();
        }
    };
    return tPlayer;
}

function init(){
    game = new Scene();
    game.setSize(700,500);
    
    player = new Player();

    
    
    
    game.start();
}


function update(){
    game.clear();
    player.update();
    player.checkKeys();
    player.checkGravity();
}
    