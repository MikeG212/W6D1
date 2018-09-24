// function sum() {
//   const args = Array.from(arguments);
//   return args.reduce((acc, el) => acc + el);
// }

function sum2(...args) {
  return args.reduce((acc,el) => acc + el);
}

Function.prototype.myBind2 = function(context){
  const bindTimeArgs = Array.from(arguments).slice(1);
  
  const originalThis = this;
  
  return function() {
    const callTimeArgs = Array.from(arguments);
    return originalThis.apply(context, bindTimeArgs.concat(callTimeArgs));
  };
};


Function.prototype.myBind = function(context, ...bindArgs) {
    return (...callTimeArgs) => (this.apply(context, bindArgs.concat(callTimeArgs))) ;
};


function curriedSum(numArgs) {
  const nums = [];
  
  function _curriedSum(num) {
    nums.push(num);
    if (nums.length === numArgs) {
      return nums.reduce( (acc, el) => (acc + el) );
    } 
    return _curriedSum; 
  }
  
  return _curriedSum;
}


Function.prototype.curry = function(numArgs) {
  const args = [];
  const that = this;
  
  function curryArgs(arg){
    // debugger; 
    args.push(arg);
    if (args.length === numArgs) return that.call(null, ...args);
    return curryArgs;
  }
  
  return curryArgs;
};


Function.prototype.curry2 = function (numArgs) {
  const args = [];
  
  const curriedFunc = arg => {
    args.push(arg);
    
    if (args.length === numArgs) {
      return this.call(null, ...args);
    }
    
    return curriedFunc;
  };
  
  return curriedFunc;
};

// 
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
// 
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
// 
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
// 
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
// 
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
// 
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
// 
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
// 
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true