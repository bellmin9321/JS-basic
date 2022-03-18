function foo () {
  const stock1 = "apple";
  const stock2 = "tesla";

  function makeClosure () {
    console.log(`stocks: ${stock1}, ${stock2}`);
  }

  return makeClosure;
}

const func = foo();

func();
// -----------------------
function getFruit() {
  const fruit = 'apple';

  function apple() {
    console.log(`fruit: ${fruit}`);
  }

  bar(apple);
}

function bar(fn) {
  fn();
}

getFruit();
// -----------------------

function addCurry(x) {
  return function add(y) {
    return x + y;
  };
}

const addFive = addCurry(5);
const addTen = addCurry(10);

const result1 = addTen(20);
const result2 = addFive(5);
const result3 = addTen(10);

console.log(result1, result2, result3);

function _curry(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return fn(a, b, c)
      };
    };
  };
}

const addArgs = function add(a, b, c) {
  return a + b + c;
}

const result = _curry(addArgs);

console.log(result(1)(2)(3));
