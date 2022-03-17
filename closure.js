function foo () {
  const stock1 = "apple";
  const stock2 = "tesla";

  function makeClosure () {
    console.log(stock1, stock2);
  }

  return makeClosure;
}

const func = foo();

func();


