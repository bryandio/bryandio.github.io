var ship;
var game;
var starfield;
var timer;
var missile;
var missile2;
var missiles = [];

function Missile(){
    tMissile = new Sprite (game, "http://aharrisbooks.net/h5g/h5g_8/missile.png", 30, 20);
    tMissile.hide();
    tMissile.fire = function(){
        missiles.push(this);
        this.show();
        tMissile.setSpeed(15);
        this.setPosition(ship.x, ship.y);
        this.setAngle(ship.getImgAngle());
        this.setBoundAction(DIE);
    }
    return tMissile;
}

function Ship(){
    tShip = new Sprite(game, "http://aharrisbooks.net/h5g/h5g_8/ship.png", 25, 25);
    
    tShip.checkKeys = function(){
        if(keysDown[K_LEFT]){
            this.changeImgAngleBy(-5);
        }
        if(keysDown[K_RIGHT]){
            this.changeImgAngleBy(5);
        }
        if(keysDown[K_UP]){
            this.addVector(this.getImgAngle(), .5);
        }
        if(keysDown[K_SPACE]){
            if(timer.getElapsedTime() >= 0){
            missile = new Missile();
            missile.fire();
            timer.reset();
        }
}
        this.addVector(this.getImgAngle(), (this.speed/ 20));
    };
    tShip.checkDrag = function() {
        speed = this.getSpeed();
        speed *= 0.95
        this.setSpeed(speed);
        
    };
    return tShip;
    
}

function init(){
    
    game = new Scene();
    starfield = new Sprite(game, "https://orig00.deviantart.net/ee65/f/2013/025/1/4/blue_star_field_stock_by_killswitchengagex-d5soz9v.jpg", 2000, 2000);
    starfield.setSpeed(0);
    timer= new Timer();
    ship = new Ship();
    game.start();
}

function update(){
    game.clear();
    starfield.update();
    ship.checkKeys();
    ship.checkDrag();
    ship.update();
    missiles.forEach(function(element){
        element.update();
    });
    
}