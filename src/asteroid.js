const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Asteroid(options){
  options.vel ||= Util.randomVec(5);
  options.radius ||= 50;
  options.color ||= "blue";
  MovingObject.call(this,options) // super call
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;