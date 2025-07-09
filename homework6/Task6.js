
function curry(func, arity){
    return function curried(...args){
      if (args.length >= arity){
        return func(...args); 
      } else {
        return function (...nextArgs){
          return curried(...args, ...nextArgs); 
        };
      }
    };
}

function multiply(a, b, c) {
	return a * b * c;
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2); // Returns a curried function
const step2 = step1(3); // Returns a curried function
const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24

console.log("Result:", result); // Expected: 24



//-------------------------Challenge---------------------------
/*
const _ = Symbol('placeholder');

function curry(fn, arity) {
  const curried = (...args) => {
    const complete = args.filter(arg => arg !== _).length >= arity;
    if (complete) {
      return fn(...args);
    }
    return (...next) => {
      const merged = args.map(arg => arg === _ && next.length ? next.shift() : arg);
      return curried(...merged.concat(next));
    };
  };
  return curried;
}


function multiply(a, b, c) {
	return a * b * c;
}


const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2); // Returns a curried function
const step1_5 = step1(3); // Returns a curried function
const step2 = step1_5(_); // Returns a curried function
const step2_5 = step2(_); // Returns a curried function
const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24


console.log("Result:", result); // Expected: 24

*/