const multiplicar = (num1, num2, callback) => {
  setTimeout(() => {
    callback(num1, num2, num1 * num2);
  }, Math.floor(Math.random() * 2000));
};

multiplicar(1, 2, (num1, num2, resultado) => {
  console.log(`${num1} * ${num2} = ${resultado}`);
  multiplicar(2, 2, (num1, num2, resultado) => {
    console.log(`${num1} * ${num2} = ${resultado}`);
    multiplicar(3, 2, (num1, num2, resultado) => {
      console.log(`${num1} * ${num2} = ${resultado}`);
    });
  });
});
