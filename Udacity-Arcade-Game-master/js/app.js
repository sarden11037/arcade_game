// Sets an initial player score of 0.
let score = 0;
$("#playerScore").html(`${score}`);
let minusX = 0;

// Enemies class with appropriate functions
class Enemy {
    constructor(x, y) {
            this.sprite = 'images/enemy-bug.png';
            this.x = x;
            this.y = y;
        } //end of constructor 
    update(dt) {
        //update function for position of enemy
        if (this.x < 505) {
            this.x += (150 * dt);
        } else {
            this.x = -90;
        }

        // If the enemy and the player collide.
        if (this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 60 && this.y + 40 > player.y) {
            score = 0;
            //jquery insert to change score
            $("#playerScore").html(`${score}`);
            player.reset();
        }
    }; //end of - update function
    // Draw the enemy function
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }; // end of draw enmy function

};






//player class with fixed constructor
class Player {
    constructor(x, y) {
        this.sprite = 'images/char-boy.png';
        this.x = 200;
        this.y = 320;
    }
    update() {
        if (player.y < 20) {
            //if player wins, score will be updated
            score++;
            $("#playerScore").html(`${score}`);
            this.reset();
        }
    }; //end-of update function
    //draw function
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }; //end-of draw function
    //input function
    handleInput(direction) {
        if (direction == 'left' && this.x > 0) {
            this.x -= 100;
        }
        if (direction == 'right' && this.x < 400) {
            this.x += 100;
        }
        if (direction == 'up' && this.y > 3) {
            this.y -= 100;
        }
        if (direction == 'down' && this.y < 400) {
            this.y += 100;
        }
    }; //end-of input function
    //reset after win/loss
    reset() {
        this.x = 200;
        this.y = 320;
    }; //end-of reset

}; //end of class



// array for random start positions
let minX = [];
for (let i = 0; i <= 5; i++) {
    minX[i] = Math.floor(Math.random() * (-90 - -890 + 1)) + -90;
}
let enemy1 = new Enemy(minX[0], 60);
let enemy2 = new Enemy(minX[1], 140);
let enemy3 = new Enemy(minX[2], 230);
let enemy4 = new Enemy(minX[3], 140);
let enemy5 = new Enemy(minX[4], 60);
let enemy6 = new Enemy(minX[5], 230);




let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
// Place the player object in a variable called player
let player = new Player();


// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});