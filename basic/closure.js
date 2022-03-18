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


