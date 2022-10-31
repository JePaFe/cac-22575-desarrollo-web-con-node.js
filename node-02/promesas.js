const multiplicar = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      reject("Los valores de los parámetros no son números");
    } else {
      setTimeout(() => {
        resolve({
          num1: num1,
          num2: num2,
          resultado: num1 * num2,
        });
      }, Math.floor(Math.random() * 2000));
    }
  });
};

multiplicar(1, 2)
  .then((response) => {
    console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);
    return multiplicar(2, 2);
  })
  .then((response) => {
    console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);
    return multiplicar(3, 2);
  })
  .then((response) => {
    console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);
  })
  .catch((error) => console.log(error));
