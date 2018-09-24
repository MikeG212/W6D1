Function.prototype.inherits = function(Parent) {
  // function Surrogate() {} 
  // Surrogate.prototype = Parent.prototype;
  // this.prototype = new Surrogate();
  // this.prototype.constructor = this;
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

MovingObject.prototype.move = function(dist) {
  console.log(`you moved ${dist}`);
};

Asteroid.prototype.fly = function() {
  console.log('flying');
};