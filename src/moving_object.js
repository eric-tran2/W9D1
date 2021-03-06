function MovingObject(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx){
  ctx.beginPath();
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0, 
    2 * Math.PI);
  ctx.fillStyle = this.color;
  ctx.fill();
}

MovingObject.prototype.move = function(){
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function(otherObject){
  [x_1, y_1] = this.pos;
  [x_2, y_2] = otherObject.pos;
  let distance = Math.sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)
  let radiiSum = this.radius + otherObject.radius
  return distance <= radiiSum
}

MovingObject.prototype.collideWith = function(otherObject){
  this.game.remove(otherObject);
  this.game.remove(this);
}

module.exports = MovingObject;


// this is math, not JavaScript
//Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)