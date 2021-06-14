const Asteroid = require("./asteroid.js");

function Game(){
  this.DIM_X = 1920;
  this.DIM_Y = 1080;
  this.NUM_ASTEROIDS = 25;

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

module.exports = Game;