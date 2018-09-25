const Util = require ("./utils.js");
const MovingObject = require("./moving_object.js");

Util.inherits(Asteroid, MovingObject);

function Asteroid(optionsHash) {
  const defaultHash = {};
  defaultHash.color = 'red';
  defaultHash.radius = 30;
  defaultHash.vel = Util.randomVec(50);
  defaultHash.pos = optionsHash.pos;

  MovingObject.call(this, defaultHash);
}

const a = new Asteroid({pos: [300,300]});

// document.addEventListener("DOMContentLoaded", function(){
//   const canvasEl = document.getElementById("canvas");
//   canvasEl.width = 750;
//   canvasEl.height = 750;
//   const ctx1 = canvasEl.getContext("2d");
//   setInterval(function () {
//     a.move();
//     a.draw(ctx1);
//   }, 1000);
// });

module.exports = Asteroid;