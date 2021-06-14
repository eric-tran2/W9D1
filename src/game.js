const Asteroid = require("./asteroid.js");

function Game(){
  this.DIM_X = 1920;
  this.DIM_Y = 1080;
  this.NUM_ASTEROIDS = 4;

  this.addAsteroids(this.NUM_ASTEROIDS);
};

Game.prototype.randomPosition = function(){
  return [
    Math.floor(Math.random() * this.DIM_X),
    Math.floor(Math.random() * this.DIM_Y)
  ]
};

Game.prototype.addAsteroids = function(numAsteroids){
  this.asteroids = [];

  for(let i = 0; i < numAsteroids; i++){
    options = {};

    options.pos = this.randomPosition();
    options.game = this;
    this.asteroids.push(new Asteroid(options));
  }
};

Game.prototype.draw = function(ctx){
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  
  this.asteroids.forEach(function(asteroid){
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function(){
  this.asteroids.forEach(function(asteroid){
    asteroid.move();
  });
}

Game.prototype.wrap = function(pos){
  if (pos[0] >= this.DIM_X){
    pos[0] = 0
  } else if (pos[0] <= 0){
    pos[0] = this.DIM_X
  }

  if (pos[1] >= this.DIM_Y) {
    pos[1] = 0
  } else if (pos[1] <= 0) {
    pos[1] = this.DIM_Y
  }

  return pos
}

Game.prototype.checkCollisions = function(){
  for ( let i = 0; i < this.asteroids.length - 1 ; i++){
    for (let j = i+1 ; j < this.asteroids.length ; j++){
      if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
        this.asteroids[i].collideWith(this.asteroids[j]);
      }
    }
  }
}

Game.prototype.step = function(){
  this.moveObjects();
  this.checkCollisions();

}

Game.prototype.remove = function(asteroid){
  for (let i = 0; i < this.asteroids.length; i++){
    if (this.asteroids[i] === asteroid){
      this.asteroids.splice(i,1)
      break;
    }
  }
}


module.exports = Game;