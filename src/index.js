console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  const canvasElement = document.getElementById("game-canvas");
  const ctx = canvasElement.getContext("2d");

  // Create a MovingObject instance
  // var gameCanvas = new MovingObject([30, 30], [5, 5], 15, "blue");
  let gameCanvas = new Asteroid({pos:[30, 30]});
  console.log(Asteroid.prototype);

  // Draw MovingObject
  gameCanvas.draw(ctx);
});