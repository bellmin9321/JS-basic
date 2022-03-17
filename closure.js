function foo () {
  const stock1 = "apple";
  const stock2 = "tesla";

  function closure () {
    console.log(stock1, stock2);
  }

  return closure;
}

const action = foo();

action();


