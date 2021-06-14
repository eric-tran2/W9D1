console.log("Webpack is working!");

const GameView = require('./game_view.js');

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  const canvasElement = document.getElementById("game-canvas");
  const ctx = canvasElement.getContext("2d");

  let gameCanvas = new GameView({ctx: ctx});
  canvasElement.width = gameCanvas.game.DIM_X;
  canvasElement.height = gameCanvas.game.DIM_Y;
  gameCanvas.start();
});