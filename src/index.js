console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  const canvasElement = document.getElementById("game-canvas");
  const ctx = canvasElement.getContext("2d");

  // Create a MovingObject instance
  var gameCanvas = new MovingObject([30, 30], [5, 5], 15, "blue");

  // Draw MovingObject
  gameCanvas.draw(ctx);
});