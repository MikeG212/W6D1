const MovingObject = require('./moving_object.js');
const Util = require("./utils.js");
const Asteroid = require("./asteroid.js");

function Game() {
  const DIM_X = 400;
  const DIM_Y = 400;
  const NUM_ASTEROIDS = 10;
  this.asteroids = [];
  for (let i = 0; i < NUM_ASTEROIDS; i++) {
    this.addAsteroids();
  }
}

Game.prototype.addAsteroids = function(){
  let a = new Asteroid(this.randomPos());
  this.asteroids.push(a);
  
};

Game.prototype.randomPos = function(){
  let x = Math.random() * 400;
  let y = Math.random() * 400;

  return {pos: [x,y]};  
};

Game.prototype.draw = function(ctx) {
  console.log('in function');
  ctx.clearRect(0,0,1000,1000);
  this.asteroids.forEach(asteroid => asteroid.draw(ctx));
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(asteroid => asteroid.move());
};

let game = new Game();

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 750;
  canvasEl.height = 750;
  const ctx = canvasEl.getContext("2d");
  game.draw(ctx);
  setInterval(function () {
      game.moveObjects();
      game.draw(ctx);
    }, 1000);
});

module.exports = Game;