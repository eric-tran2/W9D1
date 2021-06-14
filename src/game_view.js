const Game = require("./game.js");

function GameView(options){
  this.game = new Game();
  this.ctx = options.ctx;
}

GameView.prototype.start = function(){
  let that = this;
  setInterval(function(){
    that.game.moveObjects();
    that.game.draw(that.ctx);
  }, 20);
}

module.exports = GameView;