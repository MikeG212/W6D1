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

const mo = new MovingObject({ pos: [200, 200], vel: 2, radius: 40, color: 'green' });

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 750;
  canvasEl.height = 750;
  const ctx = canvasEl.getContext("2d");
  mo.draw(ctx);
});

module.exports = MovingObject;