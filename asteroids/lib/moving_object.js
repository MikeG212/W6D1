function MovingObject(optionsHash) {
  this.pos = optionsHash.pos;
  this.vel = optionsHash.vel;
  this.radius = optionsHash.radius;
  this.color = optionsHash.color;
}

MovingObject.prototype.draw = function(ctx){
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 3;
  ctx.stroke();  
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  return this.pos;
};


const mo = new MovingObject({ pos: [200, 200], vel: [100, 100], radius: 10, color: 'green' });

// document.addEventListener("DOMContentLoaded", function(){
//   const canvasEl = document.getElementById("canvas");
//   canvasEl.width = 750;
//   canvasEl.height = 750;
//   const ctx = canvasEl.getContext("2d");
//   setInterval(function () {
//     mo.move();
//     mo.draw(ctx);
//   }, 1000);
// });

module.exports = MovingObject;